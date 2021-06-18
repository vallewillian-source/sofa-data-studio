import { API } from './Api';

import { Base } from './Base';
import { IMongoDB } from './IMongoDB';
import { IMongoQuery } from './IMongoQuery';


export class MongoDB extends Base implements IMongoDB {

    name!: string;

    queries!: IMongoQuery[];

    api?: API;

  constructor() {
    super();
  }


}