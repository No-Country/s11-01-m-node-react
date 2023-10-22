import { Router } from "express";
import { searchController } from "../controllers/search.controllers";
const router = Router();

router.get("/", searchController);

export default router;
