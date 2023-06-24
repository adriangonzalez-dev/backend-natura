import { Category } from "../categories/categories.entity";

export interface createProductDto {
    title:string
    description:string
    price:number
    stock:number
    category:Category;
}

export interface updateProductDto {
    title?:string
    description?:string
    price?:number
    stock?:number
    active?:boolean
    category?:Category;
}