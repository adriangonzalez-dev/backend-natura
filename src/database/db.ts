import { DataSource } from "typeorm"
import { config } from "../config/config"
import { User } from "../users/user.entity"

export const AppDataSource: DataSource = new DataSource({
    type: "mysql",
    host: config.db.host,
    port: Number(config.db.port),
    username: config.db.username,
    password: '',
    database: config.db.database,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})