import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import addRefreshTokenToWhitelist from "../services/auth.services";
import { generateTokens } from '../utils/jwt';

import {
    createUser,
    getUserByEmail,
} from '../services/users.services';

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(404);
            throw {
                code: 5678,
                message: 'You must provde an email or password',
                errors: [
                    {
                        code: 5678,
                        field: 'email',
                        message: 'You must provde an email or password'
                    }
                ]
            };
        }
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            res.status(400);
            throw {
                code: 2345,
                message: 'Email already exists',
                errors: [
                    {
                        code: 2345,
                        field: 'email',
                        message: 'Email already exists'
                    }
                ]
            }
        }
        const user = await createUser({
            email, password,
            username: ""
        });
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


