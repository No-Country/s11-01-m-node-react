import { Router } from "express";
import { searchController } from "../controllers/search.controllers";
const router = Router();

router.get("/search", searchController);

export default router;
