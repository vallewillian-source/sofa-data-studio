import { HTTP } from './helpers/HTTPHelper'
import { Scheema } from './helpers/ScheemaHelper'
import { API } from './models/Api'
import { Conn } from './models/Conn'
import { PARAM_METHODS } from './models/defines/paramDefines'
import { IAPI } from './models/IApi'
import { IConn } from './models/IConn'
import { IOutput } from './models/IOutput'

var ObjectId = require('mongodb').ObjectID

export class AuthController {
  static async getLoginEndpoint (api: IAPI) {
    let loginEndpoint = API.MemGetLoginEndpoint(api)
    if (!loginEndpoint) {
      throw Error('login endpoint not found')
    }

    return loginEndpoint
  }

  static async processLogin (response: ILoginResponse[], api: IAPI) {
    const loginEndpoint = await this.getLoginEndpoint(api)

    var QueryStringResponses: any = {}
    var HEADERResponses: any = {}
    var BODYResponses: any = {}

    for (let param of loginEndpoint.in_params) {
      // getting user data for param
      let inputsData = []
      for (let input of param.inputs) {
        const responseItem = response.find(
          (item: ILoginResponse) => item.inputId == input.id
        )
        inputsData.push(responseItem?.value)
      }

      // TODO agregation logic

      // Applying default agregation process
      var paramResponse
      if (param.inputs.length > 1) {
        paramResponse = inputsData.join(',')
      } else {
        paramResponse = inputsData[0]
      }

      // writing to responses objects
      if (param.method == PARAM_METHODS.QUERY_STRING) {
        QueryStringResponses[param.internal_name] = paramResponse
      } else if (param.method == PARAM_METHODS.HEADER) {
        HEADERResponses[param.internal_name] = paramResponse
      } else if (param.method == PARAM_METHODS.BODY) {
        BODYResponses[param.internal_name] = paramResponse
      } else {
        console.log('..unsuported parameter type', param)
      }
    } // End param loop

    // Call login endpoint and extract data
    let loginResponse: any
    if (loginEndpoint.method == 'POST') {
      loginResponse = await HTTP.post(
        loginEndpoint.uri,
        QueryStringResponses,
        BODYResponses,
        HEADERResponses
      )
    } else if (loginEndpoint.method == 'GET') {
      loginResponse = await HTTP.get(
        loginEndpoint.uri,
        QueryStringResponses,
        HEADERResponses
      )
    } else if (loginEndpoint.method == 'PUT') {
      loginResponse = await HTTP.put(
        loginEndpoint.uri,
        QueryStringResponses,
        BODYResponses,
        HEADERResponses
      )
    } else if (loginEndpoint.method == 'DELETE') {
      loginResponse = await HTTP.delete(
        loginEndpoint.uri,
        QueryStringResponses,
        BODYResponses,
        HEADERResponses
      )
    }

    if(loginResponse.status != 200){
      return {errCode: loginResponse.response.status, err: loginResponse.response.statusText};
    }

    // Getting login data from output
    let OutSchema: IOutput[] = loginEndpoint.out_schema

    const queryToken = (output: any) => output.is_authToken == true
    let bearer_token = Scheema.getResponseParameter(
      OutSchema,
      loginResponse.data,
      queryToken
    )

    const queryUserId = (output: any) => output.is_authUserId == true
    let bearer_userId = Scheema.getResponseParameter(
      OutSchema,
      loginResponse.data,
      queryUserId
    )

    let newConn: IConn = {
      user: 'local',
      api: ObjectId(String.fromCharCode.apply(null, api._id.id)),
      createdAt: new Date(),
      updatedAt: new Date(),
      bearer_token,
      bearer_userId,
    }

    await Conn.insertNew(newConn)

    return newConn;
  }
}
