import { API } from "./Api";
import { IAPI } from "./IApi";
import { IEndpoint } from "./IEndpoint";
import { IMongoQuery } from "./IMongoQuery";
import { MongoDB } from "./MongoDB";

export interface IAction{
	_id?: any;
    name: string;
    is_endpoint: boolean;

    /* APIs */
    api?: IAPI;
    endpoint?: IEndpoint;
    endpointId?: string;

    /* DBs */
    mongoDB?: MongoDB;
    mongoDBQuery?: IMongoQuery;

}