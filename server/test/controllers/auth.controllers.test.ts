import request from "supertest";
import app from "./../../src/app";

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

  it("should handle user creation", async () => {
    const response = await request(app).post("/auth").send({
      username: " ",
      email: " ",
      password: "  ",
    });
    expect(response.status).toBe(200);
  });
  it("should handle user creation with token", async () => {
    const response = await request(app).post("/auth").send({
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
  });
  it("should login", async () => {
    const response = await request(app).post("/auth/login").send({
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
  });
});
