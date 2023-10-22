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
const app_error_1 = require("../utils/app.error");
const errorMsgs_1 = require("../constants/errorMsgs");
const searchController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ingredients = req.query.ingredients;
        if (!ingredients || ingredients.length === 0) {
            return res.status(400).send({ error: "Ingredients are required." });
        }
        const results = yield (0, search_services_1.findByIngredients)(ingredients, "vegetarian");
        return res.send(results);
    }
    catch (error) {
        if (!(error instanceof app_error_1.AppError)) {
            return next(new app_error_1.AppError(errorMsgs_1.ERROR_MSGS.SERVER_ERROR, 500));
        }
        return next(error);
    }
});
exports.searchController = searchController;
