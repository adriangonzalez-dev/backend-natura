import app from './src/app';
import 'reflect-metadata'
import { AppDataSource } from './src/database/db';
import { config } from './src/config/config';

const main = async () => {
    try {
        await AppDataSource.initialize();
        console.log('database connected')
        app.listen(config.port, () => {
        console.log(`Server is running in ${config.port} port`);
        });
    } catch (error) {
        console.log(error);
    }
}

main()