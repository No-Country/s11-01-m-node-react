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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const db_server_1 = __importDefault(require("../db/db.server"));
const cookieExtractor = (req) => {
    let cookie = null;
    if (req && req.cookies) {
        cookie = req.cookies.Authorization;
    }
    return cookie;
};
const opts = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET
};
const passportMiddleware = new passport_jwt_1.Strategy(opts, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(payload);
        const user = yield db_server_1.default.user.findFirst({
            where: {
                email: payload.email
            }
        });
        console.log(user);
        if (user !== null)
            return done(null, user);
        return done(null, false);
    }
    catch (error) {
        let errorMessage;
        if (error instanceof Error)
            errorMessage = error.message;
        return errorMessage;
    }
}));
exports.default = passportMiddleware;
