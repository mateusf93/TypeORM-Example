import "typeorm"
import 'reflect-metadata'
import { EntitySchema } from "typeorm"


export const Category = new EntitySchema({
    name:"Category", 
    tableName:"Category",
     columns:{
        id:{
            primary: true,
            type: "int", 
            generated: true , 
          },
        category: {
            type: "varchar2" 
          },
          description: {
            type: "varchar2"
          }
        },
        relations: {
          product: {
              type: "one-to-many",
              target: "Product",
              joinTable: true,
              cascade: true}}
 
    })

