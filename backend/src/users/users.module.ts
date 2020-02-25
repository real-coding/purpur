import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
