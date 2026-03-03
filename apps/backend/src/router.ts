import { Router } from 'express';
import { authenticationController } from './controllers/authentication.controller';
import { userEventsController, userEventsRegistry } from './controllers/eventType.controller';

export const router = Router();

router.use('/auth',authenticationController.router)
router.use('/user-events', userEventsController.router);