import { AppDataSource } from "../datasource/datasource.js";
import { productRepository } from "../repository/productRepository.js";

export class Services{
    constructor(entidade){
        this.entidade = entidade
    }
    async listAll(){
        return AppDataSource.getRepository(this.entidade).find()
    }
    async listById(where = {}){
        return AppDataSource.getRepository(this.entidade).findOneBy({...where})

    }
    async insertData(data){
        return AppDataSource.getRepository(this.entidade).save(data)
    }
    async updateData(data, newdata){
        return AppDataSource.getRepository(this.entidade).update(data,newdata)
        }
    async deleteData(id){
        return AppDataSource.getRepository(this.entidade).delete({id:id})
    }
}