import { IOutput } from "./IOutput";
import { IParam } from "./IParam";

export interface IEndpoint{
	_id?: any;
	id: string;
	name: string;
	description: string;
	uri: string;
	method: string;
	in_params: IParam[];
	out_schema: IOutput[];
	is_authenticated: boolean;
}