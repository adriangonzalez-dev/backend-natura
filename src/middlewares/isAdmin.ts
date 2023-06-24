import { NextFunction, Request, Response } from "express";
import { roleServices } from "../entities/roles/roles.services";
import { Role } from "../entities/roles/roles.entity";

export const isAdmin = async (req:Request, res:Response, next:Function):Promise<Response | NextFunction> => {
    const user = req.body.logged;

    if(!user){
        return res.status(401).json({
            message: "No user logged"
        })
    }

    const role:Role | null = await roleServices.getOne(user.roleId);

    if(!role){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    if(role.name !== "admin_role"){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    return next();
}