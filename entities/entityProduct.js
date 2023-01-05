import "typeorm"
import 'reflect-metadata'
import { EntitySchema } from "typeorm"



export const Product = new EntitySchema({
    name:"Product", 
    tableName:"Product",
    columns:{
        id:{
            primary: true,
            type: "int", 
            generated: true 
        },
        product: {
            type: "varchar2" 
          },
          description: {
            type: "varchar2"
          },
          categoryId:{
            type:"int",
            
                  
              },
          },
          relations: {
            category: {
                type: "many-to-one",
                target: "Category",
                joinTable: true,
                cascade: true}}
      
           
      
    })

