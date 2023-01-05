
import { ProductServices } from '../services/ProductServices.js'
import { Services } from '../services/services.js'


const productService = new ProductServices()
const categoryService = new Services('Category')
export class ProductController{

     static async createProduct(req, res){
        const newProduct = req.body
        try{
            const createdProduct = await productService.insertData(newProduct)
            return res.status(201).json(createdProduct)
        }catch(error){
            console.log(error.message)
            return res.status(500)
        }
    }
    
    static async listProducts(req,res){
        try{
            const allProducts = await productService.listAll()
            return res.status(200).send(allProducts)
            }catch(error){
            res.status(500).send(error.message)
        }
    }
    static async listProductsById(req,res){
        const {id} = req.params
        try{const ProductById = await productService.listById({
            id})
        return res.status(200).send(ProductById)
        }catch(error){
            res.status(404).send(error.message)
        }
    }
    static async updateProduct(req,res){
        const id = req.params.id
        const newInfo = req.body
        try{
            const ProductUpdate = await productService.listById({id})
            await productService.updateData(ProductUpdate, newInfo)
            const ProductUpdated = await productService.listById({id})
            res.status(200).json(ProductUpdated)
            }catch(error){
            res.status(500).send(error.message)
        }
    }
    static async deleteProduct(req,res){
        const productId = req.params.id
        try{
            await productService.deleteData(productId)
            res.status(200).send("Produto deletado com sucesso")
        }catch(error){
            res.status(500).send(error.message)
        }
    }
    static async productCategory(req,res){
        
        try{
            const id = req.params.id
            const listCategorysProducts = await productService.categoryProducts(id)
            const categorys = await categoryService.listById({id})
            for(let product of listCategorysProducts){
                product.categoryId ={
                    "category":categorys.category,
                    "description":categorys.description
                }
            }
            res.send(listCategorysProducts)
        }catch(error){
            res.status(404).send(error.message)
        }

    }
    
   

}