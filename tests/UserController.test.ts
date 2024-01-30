// tests/UserController.test.ts
import { mock, instance, when, verify } from 'ts-mockito';
import { Request, Response } from 'express';
import GetUserUseCase from '../src/useCases/GetUserUseCase';
import UserController from '../src/controllers/UserController';
import UserRepository from '../src/repositories/UserRepository';

describe('UserController', () => {
  it('should get a user', async () => {
    const userId = '123';
    const userRepository = mock<UserRepository>();
    const getUserUseCase = new GetUserUseCase(instance(userRepository));
    const userController = new UserController(getUserUseCase);

    when(userRepository.findById(userId)).thenReturn(Promise.resolve({ id: userId, name: 'John', email: 'john@example.com' }));

    // Mock Express request and response objects
    const req = { params: { id: userId } } as Request;
    const res = { json: jest.fn() } as Response;

    await userController.getUser(req, res);

    verify(res.json({ id: userId, name: 'John', email: 'john@example.com' })).once();
  });
});
