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
const express_1 = __importDefault(require("express"));
const search_routes_1 = __importDefault(require("../../src/routes/search.routes"));
const supertest_1 = __importDefault(require("supertest"));
let app;
beforeAll(() => {
    app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(search_routes_1.default);
});
describe("Search Routes", () => {
    const testSearch = [
        {
            input: {
                name: "  ",
                ingredients: "  ",
                instructions: "  ",
            },
            expectedResult: 200,
        },
    ];
    testSearch.forEach(({ input, expectedResult }, index) => {
        it(`should handle search - Test Case: ${index + 1}`, () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app).post("/search").send(input);
            expect(response.status).toBe(expectedResult);
        }));
    });
});
