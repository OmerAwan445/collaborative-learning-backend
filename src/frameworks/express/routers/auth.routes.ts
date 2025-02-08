import { AuthController } from '@controllers/auth.controller';
import { AuthInteractor } from 'interactors/auth/AuthInteractor';
import { UserRepository } from '@repositories/implements/UserRepository';
import { Router } from 'express';


const userRepo = new UserRepository();
const authInteractor  = new AuthInteractor(userRepo);
const authController = new AuthController(authInteractor);

export const authRoutes = Router();

authRoutes.post('/signup', authController.signup);
authRoutes.post('/signin', authController.signin);
