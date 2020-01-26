import { Resolver, Query } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver('App')
export class AppResolver {
  constructor(private appService: AppService) {}

  @Query()
  public helloMessage(): string {
    return this.appService.getHello();
  }
}
