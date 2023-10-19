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
exports.createUser = exports.getUserByEmail = exports.getUserById = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_server_1 = __importDefault(require("../db/db.server"));
// Obtener el usuario por id
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return db_server_1.default.user.findUnique({
            where: {
                id: parseInt(id),
            },
        });
    });
}
exports.getUserById = getUserById;
// Obetener el usuario por email
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return db_server_1.default.user.findUnique({
            where: {
                email: email,
            },
        });
    });
}
exports.getUserByEmail = getUserByEmail;
// Crear un usuario
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield bcrypt_1.default.hash(user.password, 10);
        return db_server_1.default.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: hashedPassword,
                userId: 'some_id',
            },
            select: {
                username: true,
                email: true
            }
        });
    });
}
exports.createUser = createUser;
