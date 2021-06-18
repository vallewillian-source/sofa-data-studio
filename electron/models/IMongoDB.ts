import { API } from "./Api";
import { IMongoQuery } from "./IMongoQuery";

export interface IMongoDB{
	_id?: any;
    name: string;
    queries: IMongoQuery[];
    api?: API;
}