import { Request, Response } from "express"
import { createProductDto, updateProductDto } from './products.dto'
import { productServices } from './products.services';
import { Product } from "./products.entity"

export const createProduct = async (req:Request, res:Response):Promise<Response> => {
    const data:createProductDto = req.body
    try {
        const product:Product | null = await productServices.create(data)
        if(!product){
            return res.status(400).json({
                msg: 'El producto ya existe'
            })
        }
        return res.status(200).json({
            msg:'Product creado',
            product
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const updateProduct = async (req:Request, res:Response):Promise<Response> => {
    try {
        const data:updateProductDto = req.body;
        const product:Product | null = await productServices.update(req.params.id, data);
        if(!product){
            return res.status(400).json({
                msg: 'El producto no existe'
            })
        }
        return res.status(200).json({
            msg:'Producto actualizado',
            product
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const getAllProducts = async (req:Request, res:Response):Promise<Response> => {
    try{
        const products:Array<Product> = await productServices.getAll();
        return res.status(200).json({
            msg:'Todos los productos',
            products
        })
    } catch(error){
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const getProductById = async (req:Request, res:Response):Promise<Response> => {
    try {
        const product:Product | null = await productServices.getOne(req.params.id);
        if(!product){
            return res.status(400).json({
                msg: 'El producto no existe'
            })
        }
        return res.status(200).json({
            msg:'id del producto',
            product
        })
    } catch (error) {
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const deleteProduct = async (req:Request, res:Response):Promise<Response> => {
    try {
        const response = await productServices.delete(req.params.id);
        if(!response){
            return res.status(400).json({
                msg: 'El producto no existe'
            })
        }
        return res.status(200).json({
            msg:'Producto eliminado'
        })
    } catch (error) {
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}