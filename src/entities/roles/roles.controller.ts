import { Request, Response } from "express"
import { CreateRoleDTO, UpdateRoleDTO } from './roles.dto'
import { roleServices } from "./roles.services"
import { Role } from "./roles.entity"

export const createRole = async (req:Request, res:Response):Promise<Response> => {
    const { name }:CreateRoleDTO = req.body
    try {
        const role:Role | null = await roleServices.create({name})
        if(!role){
            return res.status(400).json({
                msg: 'El Rol ya existe'
            })
        }
        return res.status(200).json({
            msg:'Rol creado',
            role
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const updateRole = async (req:Request, res:Response):Promise<Response> => {
    try {
        const dataRole:UpdateRoleDTO = req.body;
        const role:Role | null = await roleServices.update(req.params.id, dataRole);
        if(!role){
            return res.status(400).json({
                msg: 'El rol no existe'
            })
        }
        return res.status(200).json({
            msg:'Rol actualizado',
            role
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const getAllRoles = async (req:Request, res:Response):Promise<Response> => {
    try{
        const roles:Array<Role> = await roleServices.getAll();
        return res.status(200).json({
        msg:'Todos los roles',
        roles
        })
    } catch(error){
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const getRoleById = async (req:Request, res:Response):Promise<Response> => {
    try {
        const role:Role | null = await roleServices.getOne(req.params.id);
        if(!role){
            return res.status(400).json({
                msg: 'El Rol no existe'
            })
        }
        return res.status(200).json({
            msg:'Id del rol',
            role
        })
    } catch (error) {
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const deleteRole = async (req:Request, res:Response):Promise<Response> => {
    try {
        const response = await roleServices.delete(req.params.id);
        if(!response){
            return res.status(400).json({
                msg: 'El Rol no existe'
            })
        }
        return res.status(200).json({
            msg:'Rol eliminado'
        })
    } catch (error) {
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}