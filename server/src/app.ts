import express from 'express';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport.middleware';
import cookieParser from 'cookie-parser';
import router from './routes/index';

const app = express();

app.use(cors({
  origin: '*',
  credentials: true
}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passport.use(passportMiddleware)

app.use('/v1', router);

export default app;
