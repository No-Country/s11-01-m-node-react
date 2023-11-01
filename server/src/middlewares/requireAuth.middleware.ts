import { NextFunction, Request, Response } from "express";

export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.cookies.Authorization) {
        // Si el token de autorización no existe en las cookies, retorna un 401 Unauthorized
        return res.status(401).json({
            code: 401,
            message: 'Unauthorized',
            data: null,
        });
    }
    return next();
};

