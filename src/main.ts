import express, { json, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { router } from './routes/index';
import { config } from './config/config';
import { ApiError } from './errors/api.error';
import { errorMiddleware } from './middlewares/error.middleware';
import { MessageEnum } from './enums/enums';

export const app = express();

app.use(
  cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }),
);
app.use(json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api', router);

app.use('*', (_req: Request, _res: Response, next: NextFunction) => {
  next(ApiError.notFound(MessageEnum.NOT_FOUND));
});

app.use(errorMiddleware);

app.listen(config.APP_PORT, async () => {
  console.log(`Server running. Use our API on port: ${config.APP_PORT}`);
});
