import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  phone: number;
  address: string;
}

const userSchema = new Schema<IUser>({
  username: String,
  password: String,
  email: String,
  phone: Number,
  address: String
});

const User: Model<IUser> = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
