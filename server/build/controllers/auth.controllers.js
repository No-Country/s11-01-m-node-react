"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const users_services_1 = require("../services/users.services");
const jwt_1 = require("../utils/jwt");
const bcrypt_1 = require("../utils/bcrypt");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400);
            throw {
                code: 400,
                message: 'You must provde an email or password',
                data: null
            };
        }
        const existingUser = yield (0, users_services_1.getUserByEmail)(email);
        if (existingUser) {
            res.status(400);
            throw {
                code: 400,
                message: 'Email already registered',
                data: null
            };
        }
        const user = yield (0, users_services_1.createUser)({
            email, password,
            username: ""
        });
        const accessToken = (0, jwt_1.generateToken)(user);
        return res.status(200).json({
            user,
            accessToken
        });
    }
    catch (error) {
        return res.json(error);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400);
            throw ({
                code: 400,
                message: 'You must provde an email or password',
                data: null
            });
        }
        let token;
        const user = yield (0, users_services_1.getUserByEmail)(email);
        if (!user) {
            res.status(400);
            throw ({
                code: 400,
                message: 'Invalid email',
                data: null
            });
        }
        const verifyPassword = yield (0, bcrypt_1.comparePassword)(password, user.password);
        if (!verifyPassword) {
            res.status(401);
            throw ({
                code: 401,
                message: 'Invalid password',
                data: null
            });
        }
        token = (0, jwt_1.generateToken)(user);
        return res.status(200).cookie('Authorization', token, {
            maxAge: 600000,
            httpOnly: true
        }).json({
            code: 200,
            message: null,
            data: {
                user: {
                    id: user.id,
                    userId: user.userId,
                    email: user.email,
                    username: user.username
                }
            }
        });
    }
    catch (error) {
        return res.json(error);
    }
});
exports.login = login;
const logout = (_req, res) => {
    return res.status(200).clearCookie('Authorization').json({
        code: 200,
        message: 'Logged out',
        data: null
    });
};
exports.logout = logout;
