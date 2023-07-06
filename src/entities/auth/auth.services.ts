import { config } from "../../config/config";
import { User } from "../users/user.entity";
import { userServices } from "../users/user.services";
import { LoginData, RegisterData } from "./auth.interface";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const authServices = {
    async login(data:LoginData):Promise<Partial<User> | null>{
        let user:User | null = await userServices.findByEmail(data.email)
        if(!user){
            return null;
        }

        if(!bcrypt.compareSync(data.password, user.password)){
            return null
        }

        return user.transformResponse();
    },

    async register(data:RegisterData):Promise<User | null>{
        const user:User | null = await userServices.findByEmail(data.email)
        if(user){
            return null
        }
        
        return await userServices.create(data)
    },
    generateToken(data:string){
        return jwt.sign(data, config.secretJwt)
    },
    verifyToken(token:string){
        if(!token){
            return null
        }
        return jwt.verify(token, config.secretJwt)
    }
}