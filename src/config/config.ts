import 'dotenv/config';

console.log(process.env.USERNAME);
export const config = {
    port: process.env.PORT,
    db:{
        host: process.env.HOST,
        port: process.env.PORTDB,
        username: process.env.USER,
        password: process.env.PASS,
        database: process.env.DATABASE,
    }
}