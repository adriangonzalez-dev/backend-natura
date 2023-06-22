import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Product } from "../products/products.entity";

@Entity()
export class Category extends BaseEntity{

    @PrimaryColumn()
    id:string

    @Column()
    name:string

    //products
    @OneToMany(()=>Product,product=>product.category)
    products:Product[]

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}