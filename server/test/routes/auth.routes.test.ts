import express, { Express } from "express";
import router from "../../src/routes/auth.routes";
import request from "supertest";
let app: Express;

beforeAll(() => {
  app = express();
  app.use(express.json());
  app.use(router);
});

describe("Auth Routes", () => {
  const testAuth = [
    {
      input: {
        email: "  ",
        password: "  ",
      },
      expectedResult: 200,
    },
  ];
  testAuth.forEach(({ input, expectedResult }, index) => {
    it(`should handle user creation - Test Case: ${index + 1}`, async () => {
      const response = await request(app).post("/auth").send(input);
      expect(response.status).toBe(expectedResult);
    });

    it(`should handle user retrieval - Test Case: ${index + 1}`, async () => {
      const response = await request(app).get("/auth").send(input);
      expect(response.status).toBe(expectedResult);
    });
  });
});
