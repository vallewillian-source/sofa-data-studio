import { IInput } from "./IInput";

export interface IParam{
	_id?: any;
	internal_name: string;
	method: string; // QueryString, POST, BODY or HEADER.
	type: string;
	agreggator?: string;
	agreggator_parameters?: string[];
	is_required: boolean;
	inputs: IInput[];
}