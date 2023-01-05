import { AppDataSource } from "../datasource/datasource.js";
import { Product } from "../entities/entityProduct.js";

export const productRepository = AppDataSource.getRepository(Product)