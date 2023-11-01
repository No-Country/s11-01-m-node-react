// import axios from "axios";
// import { getRecipeDetails } from "../../controllers/recipes.controllers"; //

// // Mocking environment variable
// process.env.apiKey = "your-api-key";

// // Mocking Axios
// jest.mock("axios");

// describe("getRecipeDetails", () => {
//   it("should fetch recipe details", async () => {
//     // Mocking Axios response
//     (axios.get as jest.Mock)
//       .mockResolvedValueOnce({
//         data: {
//           title: "Recipe Title",
//           image: "recipe-image-url",
//           readyInMinutes: 30,
//           summary: "Recipe Summary",
//           instructions: "Recipe Instructions",
//           extendedIngredients: [
//             { name: "Ingredient 1", amount: 1, unit: "unit" },
//           ],
//           equipment: [{ name: "Equipment 1", image: "equipment-image-url" }],
//         },
//       })
//       .mockResolvedValueOnce({
//         data: {
//           equipment: [{ name: "Equipment 1", image: "equipment-image-url" }],
//         },
//       });

//     const recipeDetails = await getRecipeDetails(12345);

//     expect(recipeDetails).toEqual({
//       title: "Recipe Title",
//       Image: "recipe-image-url",
//       ReadyinMinutes: 30,
//       Summary: "Recipe Summary",
//       Instructions: "Recipe Instructions",
//       ingredients: [{ name: "Ingredient 1", amount: 1, unit: "unit" }],
//       equipment: [{ name: "Equipment 1", image: "equipment-image-url" }],
//     });
//   });

//   it("should handle errors", async () => {
//     (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));
//     const recipeDetails = await getRecipeDetails(12345);
//     expect(recipeDetails).toBeNull();
//   });
// });
