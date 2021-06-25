import { Base } from './Base';
import { IConn } from './IConn';

export class Conn extends Base {

  static collection:any;

  static async insertNew(newConn:IConn){
    return this.insertOne(this.collection, newConn);
  }
  
}