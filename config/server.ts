// config/server.ts
import express, { Application, Request, Response } from 'express';
import UserController from '../src/controllers/UserController';
import GetUserUseCase from '../src/useCases/GetUserUseCase';
import UserRepository from '../src/repositories/UserRepository';
import { connectToDatabase, getDatabase } from './database';

const app: Application = express();
const port = 3000;

// Initialize the MongoDB connection
connectToDatabase();

app.use(express.json());

const userRepository = new UserRepository(getDatabase());
const getUserUseCase = new GetUserUseCase(userRepository);
const userController = new UserController(getUserUseCase);

app.get('/api/user/:id', async (req: Request, res: Response) => {
  await userController.getUser(req, res);
});

// app.post('/api/user', async (req: Request, res: Response) => {
//   await userController.createUser(req, res);
// });

// app.put('/api/user/:id', async (req: Request, res: Response) => {
//   await userController.updateUser(req, res);
// });

// app.delete('/api/user/:id', async (req: Request, res: Response) => {
//   await userController.deleteUser(req, res);
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
