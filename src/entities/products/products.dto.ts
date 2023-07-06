import { Category } from "../categories/categories.entity";

export interface createProductDto {
    title:string
    description:string
    price:number
    stock:number
    image:string
    category:Category;
}

export interface updateProductDto {
    title?:string
    description?:string
    price?:number
    stock?:number
    image?:string
    active?:boolean
    category?:Category;
}