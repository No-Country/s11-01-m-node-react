import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import addRefreshTokenToWhitelist from "../services/auth.services";
import { generateTokens } from '../utils/jwt';

const {
    findUserByEmail,
    createUserByEmailAndPassword,
} = require('../services/users.services')

const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(404);
            throw new Error('You must provide an email and a password.');
        }
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            res.status(400);
            throw new Error('Email is already in use');
        }
        const user = await createUserByEmailAndPassword({ email, password });
        const jti = uuidv4();
        const { accessToken, refreshToken } = generateTokens(user, jti);
        await addRefreshTokenToWhitelist.addRefreshTokenToWhitelist({ jti, refreshToken, userId: user.id });

        res.json({
            accessToken,
            refreshToken
        });
    } catch (err) {
        next(err);
    }
}

export default register;
