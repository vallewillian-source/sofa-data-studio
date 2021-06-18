import { IEndpoint } from "./IEndpoint";

export interface IAPI{
	_id?: any;
	name: string;
	description: string;
	endpoints: IEndpoint[];
	urlref?: string;
	auth_type?: string; // Bearer token, API Key, OAuth, etc.
	login_endpoint_id: string;
}