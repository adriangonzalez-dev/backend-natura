import { NextFunction, Request, Response } from "express";
import { authServices } from "../entities/auth/auth.services";
import { userServices } from "../entities/users/user.services";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../entities/users/user.entity";

export const isLogged = async (req:Request, res:Response, next:Function):Promise<Response | NextFunction> => {
    
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const decoded:string | JwtPayload  = authServices.verifyToken(token)
    if(!decoded){
        return res.status(401).json({
            message: "Unauthorized"
            });
        }

    const user:User | null = await userServices.getOne(String(decoded))
    if(!user){
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    req.body.logged = user
    return next();
}