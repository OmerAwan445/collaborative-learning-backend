import { Router } from 'express';
import { authRoutes } from './auth.routes.js';

const allAppRoutes = Router();

allAppRoutes.use('/test', (_, res)=>{ res.send('Test Response') });
allAppRoutes.use('/auth', authRoutes);

export { allAppRoutes };
