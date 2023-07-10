import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  id: string;
  name: string;
  surname: string;
  email: string;
  age: number;
}

const UserSchema: Schema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
