import { Base } from './Base';

export class Action extends Base {

  static collection:any;

  static async findByName(name:string){
    return this.find(this.collection, {name});
  }

  static async findAll(){
    return this.find(this.collection, {});
  }


}