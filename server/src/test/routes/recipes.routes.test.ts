import request from "supertest";
import express, { Express } from "express";
import router from "../../routes/recipes.routes";

let app: Express;

beforeAll(() => {
  app = express();
  app.use(express.json());
  app.use(router);
});

describe("Recipe Routes", () => {
  const testData = [
    {
      input: {
        name: "recipe1",
        ingredients: "ingredients1",
        instructions: "instructions1",
      },
      expectedResult: 200,
    },
    {
      input: {
        name: "recipe2",
        ingredients: "ingredients2",
        instructions: "instructions2",
      },
      expectedResult: 200,
    },
    {
      input: {
        name: "recipe3",
        ingredients: "ingredients3",
        instructions: "instructions3",
      },
      expectedResult: 200,
    },
  ];

  testData.forEach(({ input, expectedResult }, index) => {
    it(`should handle recipe creation - Test Case: ${index + 1}`, async () => {
      const response = await request(app).post("/recipes").send(input);
      expect(response.status).toBe(expectedResult);
    });

    it(`should handle recipe retrieval - Test Case: ${index + 1}`, async () => {
      const response = await request(app).get("/recipes").send(input);
      expect(response.status).toBe(expectedResult);
    });
  });
});
