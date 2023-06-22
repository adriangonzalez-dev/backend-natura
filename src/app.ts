import express, { Application } from 'express';
import cors from 'cors';
import userRouter from './entities/users/user.routes';
import roleRouter from './entities/roles/roles.routes';
import authRouter from './entities/auth/auth.routes';
import categoryRouter from './entities/categories/categories.routes'
const app:Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter)
app.use('/roles', roleRouter)
app.use('/auth', authRouter)
app.use('/categories', categoryRouter)

export default app;