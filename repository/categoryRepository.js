import { AppDataSource } from "../datasource/datasource.js";
import { Category } from "../entities/entityCategory.js";

export const categoryRepository = AppDataSource.getRepository(Category)