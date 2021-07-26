import { User } from '../entity/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../entity/UserRepository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  async add(user: User): Promise<void> {
    await this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async modify(user: User): Promise<void> {
    const userNew = await this.userRepository.findOne(user.id);
    userNew.firstName = user.firstName;
    userNew.lastName = user.lastName;
    userNew.isActive = user.isActive;
    await this.userRepository.save(userNew);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
