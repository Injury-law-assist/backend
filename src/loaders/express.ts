import { Application, json, urlencoded } from 'express';
import router from '../api';
import errorMiddleware from '../api/middlewares/error';
export default async ({ app }: { app: Application }) => {
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use('/api', router());
  app.use(errorMiddleware);
};
