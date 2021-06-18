import { Action } from "./Action";
const { MongoClient } = require('mongodb');

export class DB {
  static client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  static database:any;
  static connected:boolean = false;
  static actionCollection:any;


  static async connect () {
    await DB.client.connect();
    DB.connected = true;
    DB.database = DB.client.db('runner');

    Action.collection = DB.database.collection("action");

  }

  static async destroy(){
    await DB.client.close();
    DB.connected = false;
  }
}
