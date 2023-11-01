//index.ts de routes es el archivo que se encarga de exportar todas las rutas de la aplicación
import { Router } from "express";
// import { getRecipeDetails } from "../controllers/recipes.controllers";
import authRoutes from "./auth.routes";
import searchRoutes from "./search.routes";
const router = Router();

router.use("/auth", authRoutes);
router.use("/search", searchRoutes); //ruta de búsqueda
// router.use("/profile", profileRoutes) //ruta del perfil
// router.use("/uploadposts", postRoutes) //ruta para subir recetas
// router.use("/uploadcomments", commentRoutes) //ruta para subir comentarios
// router.use("/savedposts", savedRoutes) //ruta para guardar recetas
//TODO FIX THIS TOO!
// router.use("/recipeDetail", getRecipeDetails) //ruta para obtener detalle de recetas
export default router;
