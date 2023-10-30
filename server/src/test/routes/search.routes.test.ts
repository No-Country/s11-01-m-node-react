import express, { Express } from "express";
import router from "../../routes/search.routes";
import request from "supertest";

let app: Express;

beforeAll(() => {
  app = express();
  app.use(express.json());
  app.use(router);
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
    it(`should handle search - Test Case: ${index + 1}`, async () => {
      const response = await request(app).post("/search").send(input);
      expect(response.status).toBe(expectedResult);
    });
  });
});
