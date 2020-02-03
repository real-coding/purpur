import bcryptjs from 'bcryptjs';
import { LoginInput, SignUpInput } from './../graphql.schema';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(loginInput: LoginInput): Promise<string> {
    const user = await this.usersService.findByLoginOrEmail(loginInput.email);
    if (!user) {
      throw Error('Email or password incorrect');
    }

    const valid = await bcryptjs.compare(loginInput.password, user.password);
    if (!valid) {
      throw Error('Email or password incorrect');
    }

    return this.jwtService.sign({ id: user.id });
  }

  async signUp(signupInput: SignUpInput): Promise<string> {
    const emailExists = await this.usersService.findByLoginOrEmail(
      signupInput.email
    );
    if (emailExists) {
      throw Error('Email is already in use');
    }
    const password = await bcryptjs.hash(signupInput.password, 10);

    const user = await this.usersService.create({
      ...signupInput,
      password
    });

    return this.signIn(user);
  }
}
