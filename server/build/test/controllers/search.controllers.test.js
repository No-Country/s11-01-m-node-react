"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const search_controllers_1 = require("../../controllers/search.controllers");
const searchServices = __importStar(require("../../services/search.services"));
jest.mock("../../src/services/search.services");
describe("searchController", () => {
    const mockRequest = () => {
        const req = { body: {} };
        return req;
    };
    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.send = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    };
    it("should return 400 if ingredients are not provided", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = mockRequest();
        const res = mockResponse();
        yield (0, search_controllers_1.searchController)(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({
            error: "Ingredients are required.",
        });
    }));
    it("should return recipes details", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = mockRequest();
        req.body = { ingredientsSelected: ["tomato", "onion", "garlic"] };
        const res = mockResponse();
        jest.spyOn(searchServices, "findByIngredients").mockResolvedValue([
            { id: 1, title: "Recipe 1" },
            { id: 2, title: "Recipe 2" },
        ]);
        const getRecipeDetails = jest
            .fn()
            .mockImplementation((id) => Promise.resolve({ details: { title: `Recipe Details ${id}` } }));
        jest.mock("../../src/controllers/recipes.controllers", () => ({
            getRecipeDetails,
        }));
        yield (0, search_controllers_1.searchController)(req, res);
        expect(res.send).toHaveBeenCalledWith({
            results: [
                { id: 1, title: "Recipe 1" },
                { id: 2, title: "Recipe 2" },
            ],
            recipeDetails: [
                { details: { title: "Recipe Details 1" } },
                { details: { title: "Recipe Details 2" } },
            ],
        });
    }));
    it("should handle errors", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = mockRequest();
        req.body = { ingredientsSelected: ["tomato", "onion", "garlic"] };
        const res = mockResponse();
        jest
            .spyOn(searchServices, "findByIngredients")
            .mockRejectedValue(new Error("Network Error"));
        yield (0, search_controllers_1.searchController)(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalled();
    }));
});
