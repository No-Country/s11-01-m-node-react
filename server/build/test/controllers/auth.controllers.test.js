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
const app_1 = __importDefault(require("../../app"));
jest.mock("../../src/services/auth.service");
jest.mock("../../src/models/user.model");
beforeAll(() => {
    jest.mock("../../src/models/user.model");
    jest.mock("../../src/services/auth.service", () => {
        return {
            createUser: jest.fn(() => {
                return {
                    username: "",
                    email: "",
                    password: "",
                };
            }),
            getUser: jest.fn(() => {
                return {
                    username: "",
                    password: "",
                };
            }),
            generateToken: jest.fn(() => {
                return "access-token";
            }),
        };
    });
});
describe("register", () => {
    // test register
    it("should handle user creation", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/auth").send({
            username: " ",
            email: " ",
            password: "  ",
        });
        expect(response.status).toBe(200);
    }));
    it("should handle user creation with token", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/auth").send({
            username: " ",
            email: " ",
            password: "  ",
        });
        expect(response.body).toEqual({
            user: {
                username: "",
                email: "",
                password: "",
            },
            accessToken: "access-token",
        });
    }));
    it("should login", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/auth/login").send({
            username: " ",
            password: "  ",
        });
        let token = "access-token";
        expect(response.body).toEqual({
            user: {
                username: "",
                password: "",
            },
            accessToken: token,
        });
        expect(response.body.accessToken).toBe(token);
        expect(response.status).toBe(200);
    }));
});
