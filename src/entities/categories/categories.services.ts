import { Category } from "./categories.entity"
import { v4 as uuid } from 'uuid'
import { CreateCategoryDto, UpdateCategoryDto } from "./categories.dto"

export const categoryServices = {
    async create(data:CreateCategoryDto):Promise<Category | null>{
        data.name = data.name.toLowerCase().trim()
        let category:Category | null = await this.getOneByName(data.name)
        if(category){
            return null
        }
        
        category = new Category()
        category.id = uuid()
        category.name = data.name

        return await category.save()
    },

    async update(id:string, data:UpdateCategoryDto):Promise<Category | null> {
        data.name = data.name?.trim().toLowerCase()
        const category:Category | null = await this.getOne(id)
        if(!category){
            return null;
        }
        category.name = data.name ? data.name : category.name

        return await category.save()
    },

    async getAll(){
        return await Category.find()
    },
    
    async getOne(id:string){
        return await Category.findOne({where:{id}})
    },

    async delete(id:string){
        const category = await this.getOne(id)
        if(!category){
            return null;
        }
        return await category.remove()
    },

    async getOneByName(name:string){
        return await Category.findOne({where:{name}})
    }
}