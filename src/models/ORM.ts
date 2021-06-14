import { EntityManager, EntityRepository, MikroORM } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { Config } from '../config';
import { API } from "./Api";
import { Conn } from './Conn';
import { History } from './History';

export class ORM{

    public DI = {} as {
        orm: MikroORM,
        em: EntityManager,
        apisRepository: EntityRepository<API>,
        connRepository: EntityRepository<Conn>,
        historyRepository: EntityRepository<History>
    };

    public async load(){
        const config: Config = require('../config.json');
        
        this.DI.orm = await MikroORM.init({
            metadataProvider: TsMorphMetadataProvider,
            entities: [API, Conn, History],
            dbName: config.db,
            type: 'mongo',
            clientUrl: config.uri,
          });
        this.DI.em = this.DI.orm.em;
        this.DI.apisRepository = this.DI.orm.em.getRepository(API);
        this.DI.connRepository = this.DI.orm.em.getRepository(Conn);
        this.DI.historyRepository = this.DI.orm.em.getRepository(History);
    }

}