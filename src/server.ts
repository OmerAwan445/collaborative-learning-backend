import { cors } from 'cors/cors';
import { allAppRoutes } from './routers/index.routes';
import express from 'express';

export function configServer() {
  const app = express();

  app.use(express.json());

  app.use(cors);

  app.use('/api/v1', allAppRoutes);

  return app;
}
