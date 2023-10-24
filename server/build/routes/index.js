"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//index.ts de routes es el archivo que se encarga de exportar todas las rutas de la aplicación
const express_1 = require("express");
const recipes_controllers_1 = require("../controllers/recipes.controllers");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const search_routes_1 = __importDefault(require("./search.routes"));
const router = (0, express_1.Router)();
router.use("/auth", auth_routes_1.default);
router.use("/search", search_routes_1.default); //ruta de búsqueda
// router.use("/profile", profileRoutes) //ruta del perfil
// router.use("/uploadposts", postRoutes) //ruta para subir recetas
// router.use("/uploadcomments", commentRoutes) //ruta para subir comentarios
// router.use("/savedposts", savedRoutes) //ruta para guardar recetas
router.use("/recipeDetail", recipes_controllers_1.getRecipeDetails); //ruta para obtener detalle de recetas
exports.default = router;
