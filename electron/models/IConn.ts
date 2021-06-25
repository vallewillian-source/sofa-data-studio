import { API } from "./Api";

export interface IConn{
    user: string; //'local' or user id.
    api: API;
    bearer_token?: string;
    bearer_userId?: string;
    createdAt: Date;
    updatedAt: Date;
}