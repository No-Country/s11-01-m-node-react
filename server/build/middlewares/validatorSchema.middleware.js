"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeSchema = exports.postSchema = exports.userSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const hasSpecialCharacter = (value) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
exports.userSchema = zod_1.default.object({
    username: zod_1.default
        .string()
        .min(5, "El nombre debe contener al menos 5 caracteres")
        .max(40, "El nombre debe contener menos de 40 caracteres"),
    email: zod_1.default
        .string()
        .email()
        .refine((value) => value.includes("@"), "El correo electrónico debe contener el carácter '@'."),
    password: zod_1.default
        .string()
        .min(5)
        .max(20) //contraseña mas segura
        .refine((value) => hasSpecialCharacter(value), {
        message: "La contraseña debe contener al menos un carácter especial.",
        path: [], // la ruta del error, en este caso la raíz de la cadena
    }),
});
exports.postSchema = zod_1.default.object({
    title: zod_1.default
        .string()
        .min(5, "El titulo debe contener al menos 5 caracteres")
        .max(40, "El titulo debe contener menos de 40 caracteres"),
});
exports.recipeSchema = zod_1.default.object({
    title: zod_1.default
        .string()
        .min(5, "El titulo debe contener al menos 5 caracteres")
        .max(40, "El titulo debe contener menos de 40 caracteres"),
    description: zod_1.default.string().min(5).max(50),
    servings: zod_1.default.number().min(5).max(50),
    ingredients: zod_1.default.array(zod_1.default.string().min(2).max(100)),
    steps: zod_1.default.array(zod_1.default.string().min(5).max(200)),
    image: zod_1.default.string().min(5).max(50),
    category: zod_1.default.string().min(5).max(50),
    readyMinutes: zod_1.default.number().min(5).max(50),
    portions: zod_1.default.number().min(5).max(50),
    tags: zod_1.default.string().min(5).max(50),
});
