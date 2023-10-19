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
exports.getIngredients = exports.fetchRecipesFromAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const errorMsgs_1 = __importDefault(require("../constants/errorMsgs"));
const httpCodes_1 = require("../constants/httpCodes");
const BASE_URL = "https://api.spoonacular.com/recipes/findByIngredients";
const API_KEY = process.env.API_KEY;
const fetchRecipesFromAPI = (ingredients, dietType) => __awaiter(void 0, void 0, void 0, function* () {
    const formattedIngredients = ingredients.join(",+").replace(/ /g, "%20");
    const URI = `${BASE_URL}?apiKey=${API_KEY}&ingredients=${formattedIngredients}&diet=${dietType}`;
    const response = yield axios_1.default.get(URI);
    return response.data;
});
exports.fetchRecipesFromAPI = fetchRecipesFromAPI;
const getIngredients = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ingredients, dietTypeSelected } = req.body;
        const data = yield (0, exports.fetchRecipesFromAPI)(ingredients, dietTypeSelected);
        res.status(httpCodes_1.HTTPCODES.OK).json({
            status: "success",
            data,
        });
    }
    catch (error) {
        if (!(error instanceof AppError_1.default)) {
            next(new AppError_1.default(errorMsgs_1.default.INTERNAL_SERVER_ERROR, httpCodes_1.HTTPCODES.BAD_REQUEST));
        }
        else {
            next(error);
        }
    }
});
exports.getIngredients = getIngredients;
