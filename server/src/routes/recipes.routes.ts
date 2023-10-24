import { Router } from 'express';
import { getRecipeDetails } from '../controllers/recipes.controllers';

const router = Router()

router.get('/recipeDetail', getRecipeDetails)

export default router