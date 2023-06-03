import { User } from "./user.entity"
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcryptjs'
import { CreateUserDTO, UpdateUserDTO } from "./user.dto"
import { roleServices } from "../roles/roles.services"


export const userServices = {
    async create(data:CreateUserDTO):Promise<User | null>{
        const role =  await roleServices.getOneByName('user_role')
        if(!role){
            return null
        }
        let user = await User.findOne({where:{email:data.email}})
        if(user){
            return null
        }
        user = await User.findOne({where:{username:data.username}})
        if(user){
            return null
        }
        
        user = new User()
        user.id = uuid()
        user.username = data.username
        user.email = data.email
        user.role = role
        user.password = bcrypt.hashSync(data.password, 10)
        return await user.save()
    },

    async update(id:string, data:UpdateUserDTO):Promise<User | null> {
        const user = await this.getOne(id)
        if(!user){
            return null;
        }
        user.username = data.username ? data.username : user.username

        return await user.save()
    },

    async getAll(){
        return await User.find({relations:['role']})
    },
    
    async getOne(id:string){
        return await User.findOne({where:{id}})
    },

    async delete(id:string){
        const user = await this.getOne(id)
        if(!user){
            return null;
        }
        return await user.remove()
    }
}