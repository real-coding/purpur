import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) {}

  async create(user: any): Promise<User> {
    return await new this.userModel(user).save();
  }

  async findById(id: string): Promise<User | undefined> {
    return await this.userModel.findById(id);
  }

  async findByLoginOrEmail(loginOrEmail: string): Promise<User | undefined> {
    return await this.userModel.findOne({
      $or: [{ email: loginOrEmail }, { username: loginOrEmail }]
    });
  }
}
