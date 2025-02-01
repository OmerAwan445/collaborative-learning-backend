import { DB_CONN_STR } from '@config/index.js';
import mongoose from 'mongoose';

export async function connectToDatabase() {
  mongoose.connection.on('connected', () => {
    console.log('Database connected successfully...');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Database connection failed...', err.message);
  });

  await mongoose.connect(DB_CONN_STR!);
}
