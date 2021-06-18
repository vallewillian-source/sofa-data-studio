export interface IMongoQuery{
	_id?: any;
    name: string;
    type:string;
    select?: any;
    options?: any;
    upsert?: any;
}