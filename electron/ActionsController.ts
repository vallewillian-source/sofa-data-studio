import { Action } from "./models/Action";
import { API } from "./models/Api";
import { IAPI } from "./models/IApi";

export class ActionsController{

    static async findAll(){
        const data = await Action.findAll();
        return await data.toArray();
    }

    static async getGroups(){
        const APISData = await API.findAll();
        let APIs:IAPI[] = await APISData.toArray();
        let data:IAPI[] = [];

        for(let api of APIs){
            let actionsData = await Action.findByAPI(api._id);
            api.actions = await actionsData.toArray();
            
            data.push(api);
        }

        console.log("data", data);

        return data;
    }
    
}