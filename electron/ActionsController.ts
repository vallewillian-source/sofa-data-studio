import { Action } from "./models/Action";
import { API } from "./models/Api";
import { IAPI } from "./models/IApi";

export class ActionsController{

    /**
     * Returns all registered Actions.
     * @returns IAction[]
     */
    static async findAll(){
        const data = await Action.findAll();
        return await data.toArray();
    }

    /**
     * Returns a list of all APIs associated with logged user actions.
     * @returns IAPI[]
     */
    static async getGroups(){
        const APISData = await API.findAll();
        let APIs:IAPI[] = await APISData.toArray();
        let data:IAPI[] = [];

        for(let api of APIs){
            let actionsData = await Action.findByAPI(api._id);
            api.actions = await actionsData.toArray();
            
            data.push(api);
        }

        return data;
    }
    
}