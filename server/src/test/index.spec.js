import app from "../src/app";
import request from "supertest";

describe("GET /", () => {
  it("should return 200 OK", () => {
    return request(app).get("/").expect(200);
  });
});
