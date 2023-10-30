import { searchController } from "../../controllers/search.controllers";
import * as searchServices from "../../services/search.services";
import { Request, Response } from "express";
jest.mock("../../src/services/search.services");

describe("searchController", () => {
  const mockRequest = () => {
    const req: Request = { body: {} } as Request;
    return req;
  };

  const mockResponse = () => {
    const res: Response = {} as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  it("should return 400 if ingredients are not provided", async () => {
    const req = mockRequest();
    const res = mockResponse();

    await searchController(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      error: "Ingredients are required.",
    });
  });

  it("should return recipes details", async () => {
    const req = mockRequest();
    req.body = { ingredientsSelected: ["tomato", "onion", "garlic"] };
    const res = mockResponse();

    jest.spyOn(searchServices, "findByIngredients").mockResolvedValue([
      { id: 1, title: "Recipe 1" },
      { id: 2, title: "Recipe 2" },
    ]);

    const getRecipeDetails = jest
      .fn()
      .mockImplementation((id: number) =>
        Promise.resolve({ details: { title: `Recipe Details ${id}` } })
      );

    jest.mock("../../src/controllers/recipes.controllers", () => ({
      getRecipeDetails,
    }));

    await searchController(req, res);

    expect(res.send).toHaveBeenCalledWith({
      results: [
        { id: 1, title: "Recipe 1" },
        { id: 2, title: "Recipe 2" },
      ],
      recipeDetails: [
        { details: { title: "Recipe Details 1" } },
        { details: { title: "Recipe Details 2" } },
      ],
    });
  });

  it("should handle errors", async () => {
    const req = mockRequest();
    req.body = { ingredientsSelected: ["tomato", "onion", "garlic"] };
    const res = mockResponse();

    jest
      .spyOn(searchServices, "findByIngredients")
      .mockRejectedValue(new Error("Network Error"));

    await searchController(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalled();
  });
});
