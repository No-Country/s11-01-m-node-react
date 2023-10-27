import { NextFunction, Request, Response } from "express";

export const redirectIfLoggedIn = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.cookies.Authorization) {
        // Si el token de autorización existe en las cookies, redirige al usuario a la página de inicio
        return res.redirect('/')
    }
    // Si el usuario no ha iniciado sesión, continúa con la siguiente función de middleware
    next();
}