import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isEmailVerified: boolean;

  @Prop({ enum: ['admin', 'user'], default: 'user' })
  role: 'admin' | 'user';

  @Prop()
  phone?: string;

  @Prop()
  avatar?: string;

  @Prop()
  birthDate?: Date;

  @Prop({
    type: {
      street: String,
      city: String,
      country: String,
    },
  })
  address?: {
    street?: string;
    city?: string;
    country?: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
