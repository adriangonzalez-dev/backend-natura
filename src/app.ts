import express, { Application } from 'express';
import userRoutes from './users/user.routes'
import { getErrors } from './middlewares/getErrors';
const app:Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes)

export default app;