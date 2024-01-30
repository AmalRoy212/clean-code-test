// src/useCases/GetUserUseCase.ts
import UserRepository from '../repositories/UserRepository';    
import { ObjectId } from 'mongodb';

class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string) {
    return this.userRepository.findById(new ObjectId(userId));
  }
}

export default GetUserUseCase;
