"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dietsChecked = (diets, diet) => {
    return diets[diet];
};
const filterRecipesByDiet = (recipes, details, diet) => {
    const filterDetails = details.filter(recipe => dietsChecked({
        dairyFree: recipe.details.dairyFree,
        vegetarian: recipe.details.vegetarian,
        glutenFree: recipe.details.glutenFree,
        vegan: recipe.details.vegan
    }, diet));
    const filterRecipes = [];
    recipes.forEach(recipe => {
        for (let i = 0; i < filterDetails.length; i++) {
            if (recipe.title === filterDetails[i].details.title) {
                filterRecipes.push(recipe);
            }
        }
    });
    return { filterRecipes, filterDetails };
};
exports.default = filterRecipesByDiet;
