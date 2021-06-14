import { IEntity } from "./IEntity";

export interface IInput{
	_id?: any;
	internal_name: string;
	name: string;
	type: string; // high-level types
	description: string;
	is_required: boolean;
	preprocess_function?: string;
	preprocess_parameters?: any;
	fill_field_internal_name?: string;
	order?: number;
    entity?: IEntity;
}