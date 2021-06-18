export abstract class Base {

    static async find(collection:any, query:any, options?:any){
      return await collection.find(query, options);
    }

    static async findOne(collection:any, query:any, options?:any){
      return await collection.findOne(query, options);
    }

    static async insertMany(collection:any, document:any){
      return await collection.insertMany(document);
    }

    static async insert(collection:any, document:any){
      return await collection.insert(document);
    }

    static async updateMany(collection:any, filter:any, update:any, options?:any){
      return await collection.updateOne(filter, update, options);
    }

    static async updateOne(collection:any, filter:any, update:any, options?:any){
      return await collection.updateOne(filter, update, options);
    }

    static async deleteOne(collection:any, query:any){
      return await collection.deleteOne(query);
    }

    static async deleteMany(collection:any, query:any){
      return await collection.deleteMany(query);
    }

    static async count(collection:any, query:any){
      return await collection.countDocuments(query);
    }
}