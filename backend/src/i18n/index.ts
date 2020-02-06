import path from 'path';
import i18next from 'i18next';
import i18nextMiddleware from 'i18next-express-middleware';
import fsBackend from 'i18next-node-fs-backend';

export default (app: any): object => {
  i18next
    .use(fsBackend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
      backend: {
        loadPath: path.resolve(__dirname, './locales/{{lng}}.json'),
        addPath: path.resolve(__dirname, './locales/{{lng}}.missing.json')
      },
      detection: {
        order: ['session', 'cookie']
      },
      lng: 'en',
      fallbackLng: 'ru',
      preload: ['ru', 'en'],
      saveMissing: true
    });

  app.use(i18nextMiddleware.handle(i18next));

  return i18next;
};
