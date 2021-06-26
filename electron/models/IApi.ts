import { IAction } from "./IAction";
import { IConn } from "./IConn";
import { IEndpoint } from "./IEndpoint";

export interface IAPI{
	_id?: any;
	name: string;
	tag?: string;
	description: string;
	endpoints: IEndpoint[];
	urlref?: string;
	auth_type?: string; // Bearer token, API Key, OAuth, etc.
	login_endpoint_id: string;
	actions?: IAction[]; // Used at Frontend, Define user's actions for each API.
	conn?: IConn; // Login data between current user and API.
}