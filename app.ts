import bodyParser from 'body-parser';
import express from 'express';

import authRoutes from './routes/auth';

const app = express();

app.use(bodyParser.json());

app.use(authRoutes);

app.listen(1313);