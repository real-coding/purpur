import { TypegooseModule } from 'nestjs-typegoose';
import { Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_PIPE } from '@nestjs/core';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.DB_URL),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req, res }) => ({ req, res })
    }),
    AuthModule,
    UsersModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    AppService,
    AppResolver
  ]
})
export class AppModule {}
