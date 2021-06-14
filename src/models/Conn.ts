import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { API } from './Api';

import { Base } from './Base';
import { IConn } from './IConn';
import { ORM } from './ORM';

@Entity()
export class Conn extends Base implements IConn {

  @Property()
  user!: string;

  @Property()
  bearer_token?: string;

  @Property()
  bearer_userId?: string;

  @ManyToOne()
  api!: API;

  constructor() {
    super();
  }

  static async persistOne(orm: ORM, conn:Conn){
    await orm.DI.connRepository.persist(conn).flush();
    return true;
  }
  
  static async isUserLogged(orm:ORM, user: string, api:API){
    let conn = await orm.DI.connRepository.findOne({ user, api });
    if(conn){
      return conn;
    }else{
      return null;
    }
  }

}