import { APIController } from './APIController'
import { Scheema } from './helpers/ScheemaHelper'
import { API } from './models/Api'
import { Conn } from './models/Conn'
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

  static async processBearerLogin (response: any, api: IAPI) {
    const loginEndpoint = await this.getLoginEndpoint(api)

    const loginResponse = await APIController.process(loginEndpoint, api, response)

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

    return newConn
  }
}
