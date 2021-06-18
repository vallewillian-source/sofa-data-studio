import { IEntity } from "./IEntity";

export interface IOutput{
	_id?: any;
	type: string; // array, object, string, number, etc.
	array_whitelist?: string[]; //whitelisted internal_names
	address?: string;
	name: string;
	is_authToken?: boolean;
	is_authUserId?: boolean;
	hightlight_lvl?: number;
	order? : number;
	is_visible: boolean;
	entity?: IEntity;
	childs?: IOutput[];
}
