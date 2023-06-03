import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Role } from "../roles/roles.entity";
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

    @ManyToOne(() => Role, role => role.users)
    role: Role;

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    transformResponse(): Partial<User> {
        const { password, ...rest } = this;
        return rest;
      }
}