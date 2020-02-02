import { Logger } from '@nestjs/common';
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import applyI18nmiddleware from './i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  applyI18nmiddleware(app);
  app.use(cookieParser());
  await app.listen(process.env.PORT);
  Logger.log('test!');
}
bootstrap();
