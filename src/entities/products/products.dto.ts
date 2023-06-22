
interface createProductDto {
    title:string
    description:string
    price:number
    stock:number
    category:string;
}

interface updateProductDto {
    title?:string
    description?:string
    price?:number
    stock?:number
    active?:boolean
    category?:string;
}