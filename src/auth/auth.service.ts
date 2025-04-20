import { Injectable, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from '../users/dto/register.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from '../users/interfaces/create-user.interface';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const existingUser = await this.usersService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new ConflictException('Email is already in use');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const userToCreate: CreateUserInput = {
      name: registerDto.name,
      email: registerDto.email,
      password: hashedPassword,
      role: 'user', // protection against clients to create admin users
      phone: registerDto.phone,
      avatar: registerDto.avatar,
      birthDate: registerDto.birthDate,
      address: registerDto.address,
    };

    return this.usersService.create(userToCreate);
  }
}
