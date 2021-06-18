
import { Base } from './Base';
import { IAPI } from './IApi';
import { IEndpoint } from './IEndpoint';

export class API extends Base {

  constructor() {
    super();
  }

  /*getLoginEndpoint(){
    
    try{
        var endpoint = this.endpoints.filter((endpoint) =>  endpoint.id == this.login_endpoint_id)[0];
        if(endpoint){
            return endpoint;
        }else{
            return null;
        }
    }catch(err){
        return null;
    }
    
  }

  getEndpointById(id:string){
    try{
      var endpoint = this.endpoints.filter((endpoint) =>  endpoint.id == id)[0];
      if(endpoint){
          return endpoint;
      }else{
          return null;
      }
    }catch(err){
        return null;
    }
  }*/


}