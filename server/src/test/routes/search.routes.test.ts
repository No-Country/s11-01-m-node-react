import express, { Express } from "express";
<<<<<<< HEAD:server/src/test/routes/search.routes.test.ts
import router from "../../routes/search.routes";
=======
import router from "../../src/routes/search.routes";
>>>>>>> unit-testing:server/test/routes/search.routes.test.ts
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
