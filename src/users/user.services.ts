import { User } from "./user.entity"
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcryptjs'
import { CreateUserDTO } from "./user.dto"

export const userServices = {
    async create(data:CreateUserDTO):Promise<User>{
        const user = new User()
        user.id = uuid()
        user.username = data.username
        user.email = data.email
        user.password = bcrypt.hashSync(data.password, 10)
        return await user.save()
    }
}