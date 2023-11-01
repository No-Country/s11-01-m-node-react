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
exports.getRecipeDetails = void 0;
const axios_1 = __importDefault(require("axios"));
function getRecipeDetails(recipeId, key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${key}`);
            const recipeDetails = response.data;
            const id = recipeDetails.id;
            const title = recipeDetails.title;
            const Image = recipeDetails.image;
            const ReadyinMinutes = recipeDetails.readyInMinutes;
            const Summary = recipeDetails.summary;
            const Instructions = recipeDetails.instructions;
            const glutenFree = recipeDetails.glutenFree;
            const vegan = recipeDetails.vegan;
            const vegetarian = recipeDetails.vegetarian;
            const dairyFree = recipeDetails.dairyFree;
            const lowFodmap = recipeDetails.lowFodmap;
            const veryPopular = recipeDetails.veryPopular;
            const sustainable = recipeDetails.sustainable;
            const veryHealthy = recipeDetails.veryHealthy;
            const ingredients = recipeDetails.extendedIngredients.map((ingredient) => ({
                name: ingredient.name,
                amount: ingredient.amount,
                unit: ingredient.unit
            }));
            //Obtener detalles del equipo en formato JSON
            const equipmentResponse = yield axios_1.default.get(`https://api.spoonacular.com/recipes/${recipeId}/equipmentWidget.json?apiKey=${key}`);
            const equipmentData = equipmentResponse.data;
            const equipment = equipmentData.equipment.map((equipment) => ({
                name: equipment.name,
                image: equipment.image
            }));
            return {
                id,
                title,
                Image,
                ReadyinMinutes,
                Summary,
                Instructions,
                ingredients,
                equipment,
                glutenFree,
                vegan,
                vegetarian,
                dairyFree,
                lowFodmap,
                veryPopular,
                sustainable,
                veryHealthy
            };
        }
        catch (error) {
            if (error.response && error.response.status === 401) {
                return { error: 'API Key limit reached' };
            }
            console.error('Error while getting the recipe details', error);
            return null;
        }
    });
}
exports.getRecipeDetails = getRecipeDetails;
