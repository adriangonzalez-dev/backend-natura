import { Request, Response } from "express";
import { authServices } from "./auth.services";
import { LoginData, RegisterData } from "./auth.interface";
import { User } from "../users/user.entity";

export const loginUser = async (req:Request, res:Response):Promise<Response> => {
    const dataLogin:LoginData = req.body
    const user:Partial<User> | null = await authServices.login(dataLogin)
    if(!user){
        return res.status(400).json({
            msg:'Correo o contraseña incorrectos'
        })
    }

    const token = authServices.generateToken(String(user.id));

    return res.status(200).json({
        msg:'Usuario logueado',
        user,
        token
    })
}

export const registerUser = async (req:Request, res:Response):Promise<Response> => {
    const registerData:RegisterData = req.body;

    const user:Partial<User> | null = await authServices.register(registerData);
    
    if(!user){
        return res.status(400).json({
            msg:'El email ' + registerData.email + ' ya esta registrado'
        })
    }

    return res.status(200).json({
        msg:'Usuario registrado',
        user
    })
}