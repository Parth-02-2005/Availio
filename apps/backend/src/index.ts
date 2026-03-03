import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { openApiSpec } from './config/swagger.config';
import { router } from './router';
import { eventTypeController } from './controllers/eventType.controller';

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.use('/api/v1',router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})