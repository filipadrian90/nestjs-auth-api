import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import assert from 'assert';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminController } from './auth/auth.controller';

assert(
  process.env.MONGO_URI != null,
  'MONGO_URI should be defined in .env file',
);

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    AuthModule,
  ],
  controllers: [AdminController],
})
export class AppModule {}
