import { Request, Response } from "express"
import { CreateCategoryDto, UpdateCategoryDto } from './categories.dto'
import { categoryServices } from "./categories.services"
import { Category } from "./categories.entity"

export const createCategory = async (req:Request, res:Response):Promise<Response> => {
    const { name }:CreateCategoryDto = req.body
    try {
        const category:Category | null = await categoryServices.create({name})
        if(!category){
            return res.status(400).json({
                msg: 'La categoria ya existe'
            })
        }
        return res.status(200).json({
            msg:'Categoria creada',
            category
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const updateCategory = async (req:Request, res:Response):Promise<Response> => {
    try {
        const dataCategory:UpdateCategoryDto = req.body;
        const category:Category | null = await categoryServices.update(req.params.id, dataCategory);
        if(!category){
            return res.status(400).json({
                msg: 'La categoria no existe'
            })
        }
        return res.status(200).json({
            msg:'Categoria actualizada',
            category
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const getAllCategories = async (req:Request, res:Response):Promise<Response> => {
    try{
        const categories:Array<Category> = await categoryServices.getAll();
        return res.status(200).json({
        msg:'Todas las categorías',
        categories
        })
    } catch(error){
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const getCategoryById = async (req:Request, res:Response):Promise<Response> => {
    try {
        const category:Category | null = await categoryServices.getOne(req.params.id);
        if(!category){
            return res.status(400).json({
                msg: 'La categoría no existe'
            })
        }
        return res.status(200).json({
            msg:'Id de la categoría',
            category
        })
    } catch (error) {
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const deleteCategory = async (req:Request, res:Response):Promise<Response> => {
    try {
        const response = await categoryServices.delete(req.params.id);
        if(!response){
            return res.status(400).json({
                msg: 'La categoría no existe'
            })
        }
        return res.status(200).json({
            msg:'Categoría eliminada'
        })
    } catch (error) {
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}