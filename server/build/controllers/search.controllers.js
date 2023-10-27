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
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchController = void 0;
const search_services_1 = require("../services/search.services");
const recipes_controllers_1 = require("./recipes.controllers");
// Captura los datos que envía el front
const searchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ingredients = req.body.ingredientsSelected; // ["tomato", "onion", "garlic"]
        if (!ingredients || ingredients.length === 0) {
            return res.status(400).send({ error: "Ingredients are required." });
        }
        const results = yield (0, search_services_1.findByIngredients)(ingredients, "vegan"); // vacio
        const recipeDetails = yield Promise.all(results.map((recipe) => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                details: yield (0, recipes_controllers_1.getRecipeDetails)(recipe.id)
            });
        })));
        //falta que devuelta las recetas
        return res.send({ results, recipeDetails });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.searchController = searchController;
