
export abstract class Base {

    static async find(collection:any, query:any, options?:any){
      return await collection.find(query, options);
    }

}