/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class LoginInput {
  email: string;
  password: string;
}

export class PostInput {
  title: string;
  body?: string;
}

export class SignUpInput {
  username: string;
  email: string;
  password: string;
}

export class AuthPayload {
  id: string;
  email: string;
}

export abstract class IMutation {
  abstract signup(signUpInput?: SignUpInput): boolean | Promise<boolean>;

  abstract login(loginInput?: LoginInput): boolean | Promise<boolean>;
}

export abstract class IQuery {
  abstract helloMessage(): string | Promise<string>;

  abstract hello(): string | Promise<string>;

  abstract me(): User | Promise<User>;
}

export class User {
  id: string;
  email: string;
  username: string;
}
