import { Action } from "./models/Action";

export class ActionsController{

    static async getAll(){

        const data = await Action.findAll();

        console.log("DATA", await data.toArray());

        return await data.toArray();
    }
    
}