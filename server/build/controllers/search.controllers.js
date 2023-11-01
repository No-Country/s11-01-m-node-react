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
exports.searchController = void 0;
const search_services_1 = require("../services/search.services");
// import { AppError } from "../utils/app.error";
const recipes_controllers_1 = require("./recipes.controllers");
const apikey_util_1 = __importDefault(require("../utils/apikey.util"));
const recipes_services_1 = require("../services/recipes.services");
const filterRecipes_1 = __importDefault(require("../utils/filterRecipes"));
// Captura los datos que envía el front
const searchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ingredients = req.query.ingredientsSelected; // "tomato", "onion", "garlic"
        const diet = req.query.dietTypeSelected;
        let key = apikey_util_1.default.getKey();
        if (!ingredients || ingredients.length === 0) {
            return res.status(400).send({ error: "Ingredients are required." });
        }
        const results = yield (0, search_services_1.findByIngredients)(ingredients, key);
        if (results instanceof Object && results.status === 402) {
            return res.status(402).json({ error: 'API Key limit reached' });
        }
        if (results instanceof String)
            res.status(500).json({ error: results });
        const recipeDetails = yield Promise.all(results.map((recipe) => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                details: yield (0, recipes_controllers_1.getRecipeDetails)(recipe.id, key),
            });
        })));
        const { filterRecipes: recipes, filterDetails: details } = (0, filterRecipes_1.default)(results, recipeDetails, diet);
        if (recipes.length === 0 || details.length === 0) {
            return res.send(yield (0, recipes_services_1.randomRecipeByDiet)(diet, key));
        }
        //falta que devuelta las recetas
        return res.json({ recipes, details });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.searchController = searchController;
