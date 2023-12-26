// lib/db.ts
import mongoose, { ConnectOptions, Mongoose } from 'mongoose';

let cached: { conn: Mongoose | null; promise: Promise<Mongoose> | null } = { conn: null, promise: null };

//TODO: this should be comming from the .env file
const MONGODB_URI = 'mongodb://localhost/users';


if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
