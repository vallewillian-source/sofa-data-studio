import { Action } from "./Action";
import { API } from "./Api";
import { Conn } from "./Conn";
import { History } from "./History";
import { MongoDB } from "./MongoDB";
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
    API.collection = DB.database.collection("api");
    Conn.collection = DB.database.collection("conn");
    History.collection = DB.database.collection("history");
    MongoDB.collection = DB.database.collection("mongodb");

  }

  static async destroy(){
    await DB.client.close();
    DB.connected = false;
  }
}
