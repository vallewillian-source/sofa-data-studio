const axios = require('axios').default;

export class HTTP{

    public static async get(url:string, queryStringParams?:any, HEADERResponses?:any){

        const response = await axios.get(url, {
            params: queryStringParams,
            headers: HEADERResponses
        }).catch(function (error: { response: { data: any; status: any; headers: any; }; }) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log("Headers:",error.response.headers);
              return error;
            }
          });
        return response;
        
    }

    public static async post(url:string, queryStringParams?:any, BODYResponses?:any, HEADERResponses?:any){

        const response = await axios.post(url, BODYResponses, {
            params: queryStringParams,
            header: HEADERResponses
        }).catch(function (error: { response: { data: any; status: any; headers: any; }; }) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log("Headers:",error.response.headers);
              return error;
            }
          });
        return response;
        
    }

    public static async put(url:string, queryStringParams?:any, BODYResponses?:any, HEADERResponses?:any){

        const response = await axios.put(url, BODYResponses, {
            params: queryStringParams,
            header: HEADERResponses
        }).catch(function (error: { response: { data: any; status: any; headers: any; }; }) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              return error;
            }
          });
        return response;
        
    }

    public static async delete(url:string, queryStringParams?:any, BODYResponses?:any, HEADERResponses?:any){

        const response = await axios.delete(url, BODYResponses, {
            params: queryStringParams,
            header: HEADERResponses
        }).catch(function (error: { response: { data: any; status: any; headers: any; }; }) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              return error;
            }
          });
        return response;
        
    }

}