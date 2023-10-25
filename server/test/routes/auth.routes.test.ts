import request from "supertest";
import express, { Express } from "express";
import router from "../../src/routes/auth.routes";

let app: Express;

beforeAll(() => {
  app = express();
  app.use(express.json());
  app.use(router);
});

describe("Auth Routes", () => {
  const testData = [
    { input: { username: "user1", password: "pass1" }, expectedResult: 200 },
    { input: { username: "user2", password: "pass2" }, expectedResult: 200 },
    { input: { username: "user3", password: "pass3" }, expectedResult: 200 },
  ];

  testData.forEach(({ input, expectedResult }, index) => {
    it(`should handle user registration - Test Case: ${
      index + 1
    }`, async () => {
      const response = await request(app).post("/register").send(input);
      expect(response.status).toBe(expectedResult);
    });

    it(`should handle user login - Test Case: ${index + 1}`, async () => {
      const response = await request(app).post("/login").send(input);
      expect(response.status).toBe(expectedResult);
    });
  });
});
