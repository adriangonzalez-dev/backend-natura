import { Role } from "./roles.entity"
import { v4 as uuid } from 'uuid'
import { CreateRoleDTO, UpdateRoleDTO } from "./roles.dto"

export const roleServices = {
    async create(data:CreateRoleDTO):Promise<Role | null>{
        let role = await Role.findOne({where:{name:data.name}})
        if(role){
            return null
        }
        
        role = new Role()
        role.id = uuid()
        role.name = data.name

        return await role.save()
    },

    async update(id:string, data:UpdateRoleDTO):Promise<Role | null> {
        const role:Role | null = await this.getOne(id)
        if(!role){
            return null;
        }
        role.name = data.name ? data.name : role.name

        return await role.save()
    },

    async getAll(){
        return await Role.find()
    },
    
    async getOne(id:string){
        return await Role.findOne({where:{id}})
    },

    async delete(id:string){
        const role = await this.getOne(id)
        if(!role){
            return null;
        }
        return await role.remove()
    },

    async getOneByName(name:string){
        return await Role.findOne({where:{name}})
    }
}