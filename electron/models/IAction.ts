import { API } from "./Api";
import { IEndpoint } from "./IEndpoint";
import { IMongoQuery } from "./IMongoQuery";
import { MongoDB } from "./MongoDB";

export interface IAction{
	_id?: any;
    name: string;
    is_endpoint: boolean;

    api?: API;
    endpoint?: IEndpoint;

    mongoDB?: MongoDB;
    mongoDBQuery?: IMongoQuery;

}