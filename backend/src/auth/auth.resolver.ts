import { GqlUser } from './../shared/decorators/decorators';
import { GqlAuthJwtGuard } from './graphql-auth.guard';
import { UsersService } from './../users/users.service';
import { UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginInput, User } from '../graphql.schema';
import { ResGql } from '../shared/decorators/decorators';
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
    @Args('loginInput') loginInput: LoginInput,
    @ResGql() res: Response
  ): Promise<boolean> {
    const accessToken = await this.authService.signIn(loginInput);
    res.cookie('token', accessToken, { httpOnly: true });
    return true;
  }

  @Mutation()
  async signup(
    @Args('signUpInput') signUpInput: SignUpInputDto,
    @ResGql() res: Response
  ): Promise<boolean> {
    const accessToken = await this.authService.signUp(signUpInput);
    res.cookie('token', accessToken, { httpOnly: true });
    return true;
  }

  @Query()
  @UseGuards(GqlAuthJwtGuard)
  me(@GqlUser() user: User) {
    return user;
  }
}
