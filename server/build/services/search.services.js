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
exports.findByIngredients = exports.getRecipes = void 0;
const fetchRecipes_1 = __importDefault(require("../utils/fetchRecipes"));
// Función para obtener las recetas
const getRecipes = (ingredients, key) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, fetchRecipes_1.default)(ingredients, key);
    return res;
});
exports.getRecipes = getRecipes;
const findByIngredients = (ingredients, key) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, fetchRecipes_1.default)(ingredients, key); // entra a la funcion de fetchRecipesFromAPI
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
