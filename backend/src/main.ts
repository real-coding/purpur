import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import applyI18nmiddleware from './i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  applyI18nmiddleware(app);
  await app.listen(4000);
}
bootstrap();
