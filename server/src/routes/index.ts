//index.ts de routes es el archivo que se encarga de exportar todas las rutas de la aplicación
import { Router } from "express";
import authRoutes from "./auth.routes";
import searchRoutes from "./search.routes";
<<<<<<< HEAD

=======
>>>>>>> search-back
const router = Router();

router.use("/auth", authRoutes);
router.use("/search", searchRoutes); //ruta de búsqueda
<<<<<<< HEAD
=======
// router.use("/search", searchRoutes); //ruta de búsqueda
>>>>>>> search-back
// router.use("/profile", profileRoutes) //ruta del perfil
// router.use("/uploadposts", postRoutes) //ruta para subir recetas
// router.use("/uploadcomments", commentRoutes) //ruta para subir comentarios
// router.use("/savedposts", savedRoutes) //ruta para guardar recetas

export default router;
