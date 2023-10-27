import express, { Router } from 'express';
import passport from 'passport';
import { login, logout, register } from '../controllers/auth.controllers';
import { redirectIfLoggedIn } from '../middlewares/auth.middleware';


const router: Router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/login', redirectIfLoggedIn, login);
router.post('/logout', passport.authenticate('jwt', { session: false }), logout);

export default router;