import { Base } from './Base';

export class API extends Base {

  static collection:any;

  /* FIND Methods */
  static async findAll(){
    return this.find(this.collection, {});
  }

  /* IN-MEMORY Methods */
  static getLoginEndpoint(endpoints:any, login_endpoint_id:any){
    
    try{
        var endpoint = endpoints.filter((endpoint:any) =>  endpoint.id == login_endpoint_id)[0];
        if(endpoint){
            return endpoint;
        }else{
            return null;
        }
    }catch(err){
        return null;
    }
    
  }

  static getEndpointById(endpoints:any, id:string){
    try{
      var endpoint = endpoints.filter((endpoint:any) =>  endpoint.id == id)[0];
      if(endpoint){
          return endpoint;
      }else{
          return null;
      }
    }catch(err){
        return null;
    }
  }


}