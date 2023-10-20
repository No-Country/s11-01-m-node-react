"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//index.ts de routes es el archivo que se encarga de exportar todas las rutas de la aplicación
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const search_routes_1 = __importDefault(require("./search.routes"));
const router = (0, express_1.Router)();
router.use("/auth", auth_routes_1.default);
router.use("/search", search_routes_1.default); //ruta de búsqueda
exports.default = router;
