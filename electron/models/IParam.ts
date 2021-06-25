import { IInput } from "./IInput";

export interface IParam{
	_id?: any;
	id: string;
	internal_name: string;
	method: string; // Defined at paramDefines. QueryString, POST, BODY or HEADER.
	type: string;
	agreggator?: string;
	agreggator_parameters?: string[];
	is_required: boolean;
	inputs: IInput[]; // Each User Requested Field
	response?: string; // Response already retrieved from user and processed by aggregator.
}