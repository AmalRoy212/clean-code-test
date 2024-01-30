// src/controllers/UserController.ts
import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';
import { ObjectId } from 'mongodb';
import GetUserUseCase from '../useCases/GetUserUseCase';


class UserController {
    constructor(private readonly getUserUseCase: GetUserUseCase) {}

  async getUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    const user = await this.getUserUseCase.execute(userId)
    res.json(user);
  }

//   async createUser(req: Request, res: Response): Promise<void> {
//     const newUser = req.body;
//     const result = await this.userRepository.create(newUser);
//     const insertedId = result.insertedId; // Get the ID of the inserted document
  
//     // Optionally, you can fetch the inserted document if needed
//     const createdUser = await this.userRepository.findById(insertedId);
  
//     res.json(createdUser);
//   }
//   async updateUser(req: Request, res: Response): Promise<void> {
//     const userId = req.params.id;
//     const updates = req.body;
//     await this.userRepository.update(userId, updates);
//     res.json({ message: 'User updated successfully' });
//   }

//   async deleteUser(req: Request, res: Response): Promise<void> {
//     const userId = req.params.id;
//     await this.userRepository.delete(userId);
//     res.json({ message: 'User deleted successfully' });
//   }
}

export default UserController;
