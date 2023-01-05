import { Services } from "./services.js";
import { AppDataSource } from "../datasource/datasource.js";

export class ProductServices extends Services{
    constructor(){
        super('Product')
        this.category = new Services('Category')
    }
    async categoryProducts(id){
        return AppDataSource.getRepository(this.entidade).find({
            relation:{category:true},
            where:{categoryId : id}
        })

    }
    
}


