import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme'
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret'
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess'
      }
    ];
  }

  async create(user: User): Promise<User> {
    user.id = this.users[this.users.length - 1].userId + 1;
    this.users.push(user);
    return await user;
  }

  async findById(id: number): Promise<User | undefined> {
    return await this.users.find((user) => user.userId === id);
  }

  async findByLoginOrEmail(loginOrEmail: string): Promise<User | undefined> {
    return await this.users.find(
      (user) => user.username === loginOrEmail || user.email === loginOrEmail
    );
  }
}
