import express, { Router } from 'express';
import { register, login, logout } from '../controllers/auth.controllers';
import passport from 'passport';

const router: Router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', passport.authenticate('jwt', { session: false }), logout);

export default router;