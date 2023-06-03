import express, { Application } from 'express';
import userRoutes from './users/user.routes';
import roleRouter from './roles/roles.routes';
const app:Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes)
app.use('/roles', roleRouter)

export default app;