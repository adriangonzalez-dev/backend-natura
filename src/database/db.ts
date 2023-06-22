import { DataSource } from "typeorm"
import { config } from "../config/config"
import { User } from "../entities/users/user.entity"
import { Role } from "../entities/roles/roles.entity"
import { Category } from "../entities/categories/categories.entity"
import { Product } from "../entities/products/products.entity"

export const AppDataSource: DataSource = new DataSource({
    url: config.db.url,
    type: "mysql",
    /* host: config.db.host,
    port: Number(config.db.port),
    username: config.db.username,
    password: config.db.password,
    database: config.db.database, */
    synchronize: true,
    logging: true,
    entities: [User, Role, Category, Product],
    subscribers: [],
    migrations: [],
    insecureAuth: true
})