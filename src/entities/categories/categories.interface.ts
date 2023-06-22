export interface ICategory {
    id:string
    name:string
    //products
    /* @OneToMany(()=>User,user=>user.role)
    users:User[] */
    createdAt:Date
    updatedAt:Date
}