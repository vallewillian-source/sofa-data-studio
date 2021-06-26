import { Base } from './Base';
import { IAPI } from './IApi';
import { IConn } from './IConn';

export class Conn extends Base {

  static collection:any;

  static async insertNew(newConn:IConn){
    return this.insertOne(this.collection, newConn);
  }

  static async findByAPI(api:IAPI, user:string='local'){
    return this.findOne(this.collection, {
      api: api._id,
      user
    });
  }
  
}