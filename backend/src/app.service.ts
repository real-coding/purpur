import { Injectable, Req } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(request): string {
    return request.t('hello');
  }
}
