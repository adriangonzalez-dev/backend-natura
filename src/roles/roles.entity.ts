import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "../users/user.entity";
@Entity()
export class Role extends BaseEntity{

    @PrimaryColumn()
    id:string

    @Column()
    name:string

    @OneToMany(()=>User,user=>user.role)
    users:User[]

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}