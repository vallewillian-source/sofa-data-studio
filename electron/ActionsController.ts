import { Action } from "./models/Action";
import { API } from "./models/Api";
import { Conn } from "./models/Conn";
import { IAction } from "./models/IAction";
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

            // Associating conn
            const conn = await Conn.findByAPI(api);
            if(conn){
                api.conn = conn;
            }
            
            // Association actions
            let actionsData = await Action.findByAPI(api._id);
            api.actions = await actionsData.toArray() as IAction[];

            for(let action of api.actions){
                action.endpoint = await API.MemGetEndpointById(api.endpoints, action.endpointId);
            }
            
            data.push(api);
        }

        return data;
    }
    
}