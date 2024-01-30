// config/database.ts
import { MongoClient, Db } from 'mongodb';

let database: Db | null = null;

export const connectToDatabase = async (): Promise<void> => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017');

    database = client.db();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};

export const getDatabase = (): Db => {
  if (!database) {
    throw new Error('Database not connected');
  }
  return database;
};
