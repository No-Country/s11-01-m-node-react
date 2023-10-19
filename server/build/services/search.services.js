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
exports.findByIngredients = exports.getRecipes = void 0;
const spoonclarAPI_middleware_1 = require("../middlewares/spoonclarAPI.middleware");
// Función para obtener las recetas
const getRecipes = (ingredients, dietType) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, spoonclarAPI_middleware_1.fetchRecipesFromAPI)(ingredients, dietType);
    return res;
});
exports.getRecipes = getRecipes;
const findByIngredients = (ingredients, dietType) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, spoonclarAPI_middleware_1.fetchRecipesFromAPI)(ingredients, dietType);
    return res;
});
exports.findByIngredients = findByIngredients;
// // Función para crear una receta
// export const createSearch = async (search: Search) => {
//   // const newSearch = await Search.create(search);
//   // return newSearch;
// }
// // Función para obtener todas las recetas
// export const getAllSearch = async () => {}
