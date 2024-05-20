import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoriesService } from "../services/categories.services";

export class CategoriesFactory {
    private static catgoriesService: CategoriesService;
    static getServiceInstance(){
        if(this.catgoriesService){
            return this.catgoriesService;
        }

        const repository = new CategoriesRepository(CategoryModel);

        const service = new CategoriesService(repository);

        this.catgoriesService = service;

        return service;
    }
}