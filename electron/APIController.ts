import { HTTP } from './helpers/HTTPHelper'
import { PARAM_METHODS } from './models/defines/paramDefines'
import { IAPI } from './models/IApi'
import { IConn } from './models/IConn'
import { IEndpoint } from './models/IEndpoint'
import { IParam } from './models/IParam'

export class APIController {
  static async process (endpoint: IEndpoint, api: IAPI, response: any) {
    var QueryStringResponses: any = {}
    var HEADERResponses: any = {}
    var BODYResponses: any = {}

    for (let param of endpoint.in_params) {
      // getting user data for param
      let inputsData = []
      for (let input of param.inputs) {
        try {
          const responseItem = response[input.id]
          inputsData.push(responseItem)
        } catch (err) {
          console.error(err)
        }
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

    // inserting Autentication Data
    if (endpoint.is_authenticated && api.conn) {
      if (api.auth_type == 'Bearer') {
        HEADERResponses['X-Requested-With'] = 'XMLHttpRequest'
        HEADERResponses['X-Auth-Token'] = api.conn.bearer_token
        HEADERResponses['X-User-Id'] = api.conn.bearer_userId
      }
    }

    // Call login endpoint and extract data
    let payload: any
    if (endpoint.method == 'POST') {
      payload = await HTTP.post(
        endpoint.uri,
        QueryStringResponses,
        BODYResponses,
        HEADERResponses
      )
    } else if (endpoint.method == 'GET') {
      payload = await HTTP.get(
        endpoint.uri,
        QueryStringResponses,
        HEADERResponses
      )
    } else if (endpoint.method == 'PUT') {
      payload = await HTTP.put(
        endpoint.uri,
        QueryStringResponses,
        BODYResponses,
        HEADERResponses
      )
    } else if (endpoint.method == 'DELETE') {
      payload = await HTTP.delete(
        endpoint.uri,
        QueryStringResponses,
        BODYResponses,
        HEADERResponses
      )
    }

    if (payload.status != 200) {
      return {
        errCode: payload.response.status,
        err: payload.response.statusText,
      }
    }

    return payload
  }
}
