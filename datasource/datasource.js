import 'dotenv/config'
import 'reflect-metadata'
import { DataSource} from 'typeorm'
import {Product} from '../entities/entityProduct.js'
import { Category } from '../entities/entityCategory.js'
const port = process.env.PORT || 1521

export const AppDataSource = new DataSource({
    type: "oracle",
    host: "localhost",
    port: 1521,
    username:"SAPIENS",
    password:"tecsis",
    SID:'dg4odbc',
    serviceName:'orcl',
    subscribers: [], 
    database:"SAPIENS",
    synchronize: true,                      
    logging: false,  
    autoLoadEntities:true,
	entities: [Product, Category],
	migrations: ['../migrations/*.{ts,js}'],
    cli: {
        "migrationsDir": "../migrations/"
      }
})