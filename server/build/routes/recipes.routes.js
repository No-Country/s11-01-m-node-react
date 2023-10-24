"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipes_controllers_1 = require("../controllers/recipes.controllers");
const router = (0, express_1.Router)();
router.get('/recipeDetail', recipes_controllers_1.getRecipeDetails);
exports.default = router;
