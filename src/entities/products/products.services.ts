import { v4 as uuid } from 'uuid'
import { createProductDto, updateProductDto  } from "./products.dto"
import { Product } from "./products.entity"

export const productServices = {
    async create(data:createProductDto):Promise<Product | null>{
        data.title = data.title.toLowerCase().trim()
        let product:Product | null = await this.getOneByName(data.title);

        if(product) {
            return null;
        }
        
        product = new Product()
        product.id = uuid()
        product.title = data.title
        product.description = data.description
        product.price = data.price
        product.category = data.category
        product.stock = data.stock
        product.image = data.image ?? ''

        return await product.save()
    },

    async update(id:string, data:updateProductDto):Promise<Product | null> {
        data.title = data.title?.trim().toLowerCase()
        const product:Product | null = await this.getOne(id)
        if(!product){
            return null;
        }
        
        product.title = data.title ?? product.title
        product.description = data.description ?? product.description
        product.price = data.price ?? product.price
        product.category = data.category ?? product.category
        product.stock = data.stock ?? product.stock
        product.image = data.image ?? product.image

        return await product.save()
    },

    async getAll(){
        return await Product.find()
    },
    
    async getOne(id:string){
        return await Product.findOne({where:{id}})
    },

    async delete(id:string){
        const product = await this.getOne(id)
        if(!product){
            return null;
        }
        return await product.remove()
    },

    async getOneByName(title:string){
        return await Product.findOne({where:{title}})
    }
}