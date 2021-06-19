import { Base } from './Base';
var ObjectId = require('mongodb').ObjectID;

export class Action extends Base {

  static collection:any;

  /* FIND Methods */
  static async findByName(name:string){
    return this.find(this.collection, {name});
  }

  static async findAll(){
    return this.find(this.collection, {});
  }

  static async findByAPI(apiId:any){
    return this.find(this.collection, {api: ObjectId(apiId)});
  }

}