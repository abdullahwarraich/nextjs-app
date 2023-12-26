import dbConnect from '../lib/db';
import User from '../models/User';
import { usersSeed } from './user-seed';

async function seedUsers() {
  try {
    const db = await dbConnect();

    // Clear existing users
    await User.deleteMany({});

    // Insert seed data
    await User.insertMany(usersSeed);

    console.log('Users seeded successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
}

// Run the seed function
seedUsers();
