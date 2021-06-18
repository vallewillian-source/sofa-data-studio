import { Action } from "./models/Action";

export class ActionsController{

    static async getAll(){
        const data = await Action.findAll();
        return await data.toArray();
    }
    
}