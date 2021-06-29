import { Base } from './Base';
import { IAPI } from './IApi';
import { IEndpoint } from './IEndpoint';

export class API extends Base {

  static collection:any;

  /* FIND Methods */
  static async findAll(){
    return this.find(this.collection, {});
  }

  /* IN-MEMORY Methods */
  static MemGetLoginEndpoint(api:IAPI){
    try{
        var endpoint = api.endpoints.filter((endpoint:IEndpoint) =>  endpoint.id == api.login_endpoint_id)[0];
        if(endpoint){
            return endpoint;
        }else{
            return null;
        }
    }catch(err){
        console.log("Err on MemGetLoginEndpoint", err);
        return null;
    }
    
  }

  static MemGetEndpointById(endpoints:any, id:string | undefined){
    try{
      var endpoint = endpoints.filter((endpoint:any) =>  endpoint.id == id)[0];
      if(endpoint){
          return endpoint;
      }else{
          return null;
      }
    }catch(err){
      console.log("Err on MemGetEndpointById", err);
        return null;
    }
  }


}