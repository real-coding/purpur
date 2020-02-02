import { GqlUser } from './../shared/decorators/decorators';
import { GqlAuthJwtGuard } from './graphql-auth.guard';
import { UsersService } from './../users/users.service';
import { UseGuards, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import bcryptjs from 'bcryptjs';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LoginInput, User } from '../graphql.schema';
import { ReqGql, ResGql } from '../shared/decorators/decorators';
import { SignUpInputDto } from './sign-up-input.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwt: JwtService,
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Mutation()
  async login(
    @Args('loginInput') { email, password }: LoginInput,
    @ResGql() res: Response
  ) {
    const user = await this.usersService.findByLoginOrEmail(email);
    if (!user) {
      throw Error('Email or password incorrect');
    }

    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      throw Error('Email or password incorrect');
    }

    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });

    return user;
  }

  @Mutation()
  async signup(
    @Args('signUpInput') signUpInputDto: SignUpInputDto,
    @ResGql() res: Response
  ) {
    Logger.log('signup');
    const emailExists = await this.usersService.findByLoginOrEmail(
      signUpInputDto.email
    );
    if (emailExists) {
      throw Error('Email is already in use');
    }
    const password = await bcryptjs.hash(signUpInputDto.password, 10);

    const user = await this.usersService.create({
      ...signUpInputDto,
      password
    });

    const { accessToken } = this.authService.login(user);
    res.cookie('token', accessToken, { httpOnly: true });

    return user;
  }

  @Query()
  @UseGuards(GqlAuthJwtGuard)
  me(@GqlUser() user: User) {
    return user;
  }
}
