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
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("../../src/routes/auth.routes"));
let app;
beforeAll(() => {
    app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(auth_routes_1.default);
});
describe("Auth Routes", () => {
    const testData = [
        { input: { username: "user1", password: "pass1" }, expectedResult: 200 },
        { input: { username: "user2", password: "pass2" }, expectedResult: 200 },
        { input: { username: "user3", password: "pass3" }, expectedResult: 200 },
    ];
    testData.forEach(({ input, expectedResult }, index) => {
        it(`should handle user registration - Test Case: ${index + 1}`, () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app).post("/register").send(input);
            expect(response.status).toBe(expectedResult);
        }));
        it(`should handle user login - Test Case: ${index + 1}`, () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app).post("/login").send(input);
            expect(response.status).toBe(expectedResult);
        }));
    });
});
