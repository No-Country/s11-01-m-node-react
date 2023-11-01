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
const axios_1 = __importDefault(require("axios"));
// Conecta con la api y devuelve una receta formateando los ingredientes y el tipo de  dieta. Devuelve un objeto con los datos de la receta
const fetchRecipesFromAPI = (ingredients, key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formattedIngredients = ingredients;
        const URI = `${process.env.SEARCH_BYINGREDIENTS}?apiKey=${key}&ingredients=${formattedIngredients}`;
        const response = yield axios_1.default.get(URI);
        return response.data;
    }
    catch (error) {
        if (error.response) {
            return error.response;
        }
        return 'Internal Server Error';
    }
});
exports.default = fetchRecipesFromAPI;
