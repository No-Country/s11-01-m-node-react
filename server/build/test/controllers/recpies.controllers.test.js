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
const recipes_controllers_1 = require("../../controllers/recipes.controllers"); //
// Mocking environment variable
process.env.apiKey = "your-api-key";
// Mocking Axios
jest.mock("axios");
describe("getRecipeDetails", () => {
    it("should fetch recipe details", () => __awaiter(void 0, void 0, void 0, function* () {
        // Mocking Axios response
        axios_1.default.get
            .mockResolvedValueOnce({
            data: {
                title: "Recipe Title",
                image: "recipe-image-url",
                readyInMinutes: 30,
                summary: "Recipe Summary",
                instructions: "Recipe Instructions",
                extendedIngredients: [
                    { name: "Ingredient 1", amount: 1, unit: "unit" },
                ],
                equipment: [{ name: "Equipment 1", image: "equipment-image-url" }],
            },
        })
            .mockResolvedValueOnce({
            data: {
                equipment: [{ name: "Equipment 1", image: "equipment-image-url" }],
            },
        });
        const recipeDetails = yield (0, recipes_controllers_1.getRecipeDetails)(12345);
        expect(recipeDetails).toEqual({
            title: "Recipe Title",
            Image: "recipe-image-url",
            ReadyinMinutes: 30,
            Summary: "Recipe Summary",
            Instructions: "Recipe Instructions",
            ingredients: [{ name: "Ingredient 1", amount: 1, unit: "unit" }],
            equipment: [{ name: "Equipment 1", image: "equipment-image-url" }],
        });
    }));
    it("should handle errors", () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockRejectedValueOnce(new Error("Network Error"));
        const recipeDetails = yield (0, recipes_controllers_1.getRecipeDetails)(12345);
        expect(recipeDetails).toBeNull();
    }));
});
