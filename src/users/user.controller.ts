import { Request, Response } from "express"
import { CreateUserDTO } from './user.dto'
import { userServices } from "./user.services"
import { IUser } from "./user.interface"

export const createUser = async (req:Request, res:Response) => {
    const {email, password, username}:CreateUserDTO = req.body
    try {
        const user:IUser = await userServices.create({email, password, username})
        return res.status(200).json({
            msg:'Create user',
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg:'Error',
            error
        })
    }
}
export const updateUser = (req:Request, res:Response) => {
    return res.status(200).json({
        msg:'Update user'
    })
}
export const getAllUsers = (req:Request, res:Response) => {
    return res.status(200).json({
        msg:'All users'
    })
}
export const getUserById = (req:Request, res:Response) => {
    return res.status(200).json({
        msg:'User by id'
    })
}
export const deleteUser = (req:Request, res:Response) => {
    return res.status(200).json({
        msg:'Delete User'
    })
}