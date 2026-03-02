import { Router } from 'express';
import { authenticationController } from './controllers/authentication.controller';

export const router = Router();

router.use('/auth',authenticationController)