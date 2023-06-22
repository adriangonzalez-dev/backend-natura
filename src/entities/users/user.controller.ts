import { Request, Response } from "express"
import { CreateUserDTO, UpdateUserDTO } from './user.dto'
import { userServices } from "./user.services"
import { User } from "./user.entity"

export const createUser = async (req:Request, res:Response) => {
    const {email, password, username}:CreateUserDTO = req.body
    try {
        const user:User | null= await userServices.create({email, password, username})
        if(!user){
            return res.status(400).json({
                msg: 'El nombre de usuario o email ya existen'
            })
        }
        const userFiltered:Partial<User> = user.transformResponse()
        return res.status(200).json({
            msg:'Usuario registrado',
            user:userFiltered
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const updateUser = async (req:Request, res:Response) => {
    try {
        const dataUser:UpdateUserDTO = req.body;
        const user:User | null = await userServices.update(req.params.id, dataUser);
        if(!user){
            return res.status(400).json({
                msg: 'El usuario no existe'
            })
        }
        const userFiltered:Partial<User> = user.transformResponse() 
        return res.status(200).json({
            msg:'Usuario actualizado',
            user:userFiltered
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const getAllUsers = async (req:Request, res:Response) => {
    const users:Array<User> = await userServices.getAll();
    const usersFiltered:Array<Partial<User>> = users.map(user => user.transformResponse())
    return res.status(200).json({
        msg:'Todos los usuarios',
        users: usersFiltered
    })
}
export const getUserById = async (req:Request, res:Response) => {
    const user:User | null = await userServices.getOne(req.params.id);
    if(!user){
        return res.status(400).json({
            msg: 'El usuario no existe'
        })
    }
    const userFiltered:Partial<User> = user.transformResponse()
    return res.status(200).json({
        msg:'Id del usuario',
        user:userFiltered
    })
}
export const deleteUser = async (req:Request, res:Response) => {
    const response = await userServices.delete(req.params.id);
    if(!response){
        return res.status(400).json({
            msg: 'El usuario no existe'
        })
    }
    return res.status(200).json({
        msg:'Usuario eliminado'
    })
}