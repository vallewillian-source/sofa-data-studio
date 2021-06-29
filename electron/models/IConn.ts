import { IAPI } from "./IApi";

export interface IConn{
    user: string; //'local' or user id.
    api: IAPI;
    bearer_token?: string;
    bearer_userId?: string;
    createdAt: Date;
    updatedAt: Date;
}