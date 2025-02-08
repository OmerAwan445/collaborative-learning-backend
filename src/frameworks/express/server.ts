import { cors } from '@frameworks/cors/cors';
import { allAppRoutes } from './routers/index.routes';
import express from 'express';
import { errorMiddleware } from './middlewares/errorMiddleware';

export function configServer() {
  const app = express();

  app.use(express.json());

  app.use(cors);

  app.use('/api/v1', allAppRoutes);
  app.use('/', (_, res) => res.send('Welcome to the API'));
  app.use(errorMiddleware);
  return app;
}
