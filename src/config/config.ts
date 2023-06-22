import 'dotenv/config';

export const config = {
    secretJwt: String(process.env.SECRET),
    port: process.env.PORT,
    db:{
        host: process.env.HOST,
        port: process.env.PORTDB,
        username: process.env.USER,
        password: process.env.PASS,
        database: process.env.DATABASE,
        url: process.env.DATABASE_URL
    },
}