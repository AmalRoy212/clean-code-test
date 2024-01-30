// src/repositories/UserRepository.ts
import { Db, ObjectId, InsertOneResult } from 'mongodb';

class UserRepository {
  constructor(private readonly database: Db) {}

  async findById(userId: ObjectId): Promise<any> {
    return this.database.collection('users').findOne({ _id: userId });
  }

  async create(user: any): Promise<InsertOneResult<any>> {
    const result = await this.database.collection('users').insertOne(user);
    return result;
  }

  async update(userId: string, updates: any) {
    return this.database.collection('users').updateOne({ _id: new ObjectId(userId) }, { $set: updates });
  }

  async delete(userId: string) {
    return this.database.collection('users').deleteOne({ _id: new ObjectId(userId) });
  }
}

export default UserRepository;
