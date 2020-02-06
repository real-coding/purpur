import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import applyI18nmiddleware from './i18n';
import { patchClassValidatorI18n } from './shared/utils/patchClassValidatorI18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const i18n = applyI18nmiddleware(app);
  patchClassValidatorI18n(i18n);
  app.use(cookieParser());
  await app.listen(process.env.PORT);
}
bootstrap();
