import { prop, Typegoose } from '@typegoose/typegoose';
import { Schema } from 'mongoose';

export class User extends Typegoose {
  _id: Schema.Types.ObjectId;

  @prop()
  email: string;

  @prop()
  username?: string;

  @prop()
  password?: string;
}
