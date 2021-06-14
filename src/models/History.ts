import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { API } from './Api';

import { Base } from './Base';
import { IEndpoint } from './IEndpoint';
import { IHistory } from './IHistory';
import { ORM } from './ORM';

@Entity()
export class History extends Base implements IHistory {

  @Property()
  data: any;

  @ManyToOne()
  api!: API;

  endpoint!: IEndpoint;

  user?: string;

  constructor() {
    super();
  }

  static async persistOne(orm: ORM, run:History){
    await orm.DI.historyRepository.persist(run).flush();
    return true;
  }

}