import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Category } from "../categories/categories.entity";
@Entity()
export class Product extends BaseEntity{

    @PrimaryColumn()
    id:string

    @Column()
    title:string

    @Column()
    description:string

    @Column()
    price:number

    @Column({
        default:0
    })
    stock:number

    @Column({
        default:true
    })
    active:boolean

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}