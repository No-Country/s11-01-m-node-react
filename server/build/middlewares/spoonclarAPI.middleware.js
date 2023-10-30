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
exports.getIngredients = void 0;
const fetchRecipes_1 = __importDefault(require("../utils/fetchRecipes"));
const errorMsgs_1 = require("../constants/errorMsgs");
const httpCodes_1 = require("../constants/httpCodes");
const app_error_1 = require("../utils/app.error");
// Capturar los datos que envia el front
const getIngredients = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ingredients = req.query.ingredients;
        const dietTypeSelected = req.query.dietTypeSelected;
        const data = yield (0, fetchRecipes_1.default)(ingredients, dietTypeSelected);
        return res.status(httpCodes_1.HTTPCODES.OK).json({
            status: "success",
            data,
        });
    }
    catch (error) {
        if (!(error instanceof app_error_1.AppError)) {
            return next(new app_error_1.AppError(errorMsgs_1.ERROR_MSGS.SERVER_ERROR, httpCodes_1.HTTPCODES.BAD_REQUEST));
        }
        else {
            return next(error);
        }
    }
});
exports.getIngredients = getIngredients;
