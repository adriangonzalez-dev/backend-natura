import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryColumn()
    id:string

    @Column()
    username:string

    @Column()
    email:string

    @Column()
    password:string

    @Column({
        default:true
    })
    active:boolean

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date
}