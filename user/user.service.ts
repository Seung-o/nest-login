import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { VerifyEmailDto } from './dto/verify-user.dto';

@Injectable()
export class UserService {
  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  verifyEmail(verifyEmailDto: VerifyEmailDto) {
    return 'This action verifys user email';
  }

  login(loginUserDto: UserLoginDto) {
    return 'This action adds a logined user';
  }

  getUser(userId: string) {
    return `This action gets a user info where userId is ${userId}`;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
