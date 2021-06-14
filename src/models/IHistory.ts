import { API } from "./Api";
import { IEndpoint } from "./IEndpoint";

export interface IHistory{
    data: any; 
    api: API;
    endpoint: IEndpoint;
    user?: string;
}