import { User } from "./roles.entity"

export interface IUser {
    id:string
    username:string
    email:string
    password:string
    active:boolean
    createdAt:Date
    updatedAt:Date
    transformResponse:()=>Partial<User>
}

export interface IUserResponse {
    id:string
    username:string
    email:string
    active:boolean
    createdAt:Date
    updatedAt:Date
}