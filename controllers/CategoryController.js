import { CategoryServices } from '../services/CategoryServices.js'

const categoryServices = new CategoryServices()

export class CategoryController{
     static async createCategory(req, res){
        const newCategory = req.body
        try{
            const createdCategory = await categoryServices.insertData(newCategory)
            return res.status(201).json(createdCategory)
        }catch(error){
            console.log(error.message)
            return res.status(500)
        }
    }
    static async listCategory(req,res){
        try{
            const allCategory = await categoryServices.listAll()
            return res.status(200).send(allCategory)
            }catch(error){
            res.status(500).send(error.message)
        }
    }
    static async listCategoryById(req,res){
        const {id} = req.params
        try{const CategoryById = await categoryServices.listById({id})
        return res.status(200).send(CategoryById)
        }catch(error){
            res.status(404).send(error.message)
        }
    }
    static async updateCategory(req,res){
        const id = req.params.id
        const newInfo = req.body
        try{const CategoryUpdate = await categoryServices.listById({id})
            await categoryServices.updateData(CategoryUpdate, newInfo)
            const UpdatedCategory = await categoryServices.listById({id})
            res.json(UpdatedCategory).status(200)
        }catch(error){
            res.status(500).send(error.message)
        }
    }
    static async deleteCategory(req,res){
        const categoryId = req.params.id
        try{
            await categoryServices.deleteData(categoryId)
            res.status(200).send("Categoria deletado com sucesso")
        }catch(error){
            res.status(500).send(error.message)
        }
    }


}