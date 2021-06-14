import { Entity, Property, ArrayType, OneToMany, Collection } from '@mikro-orm/core';

import { Base } from './Base';
import { IAPI } from './IApi';
import { IEndpoint } from './IEndpoint';
import { ORM } from './ORM';

@Entity()
export class API extends Base implements IAPI {

  @Property()
  name!: string;

  @Property()
  description!: string;

  @Property({ type: ArrayType, nullable: true })
  endpoints!: IEndpoint[];

  @Property()
  urlref?: string;

  @Property()
  auth_type?: string;

  @Property()
  login_endpoint_id!: string;

  constructor() {
    super();
  }
  

  getLoginEndpoint(){
    
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
  }

  /* Static Model Methods */
  static async findOneByName(orm:ORM, name: string){
    return await orm.DI.apisRepository.findOne({ name });
  }

}