import { Router } from 'express';
import { authRoutes } from './auth.routes.js';

const allAppRoutes = Router();

allAppRoutes.use('/auth', authRoutes);

export { allAppRoutes };
