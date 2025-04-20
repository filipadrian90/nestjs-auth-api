import { AddressDto } from '../dto/register.dto';

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
  phone?: string;
  avatar?: string;
  birthDate?: string;
  address?: AddressDto;
}
