import axios from "axios";


export async function getRecipeDetails(recipeId: string): Promise<void> {

    try {


        const response = await
            axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${process.env.apiKey}`);

        const recipeDetails = response.data;

        console.log('Title:', recipeDetails.title);
        console.log('Image:', recipeDetails.image);
        console.log('Ready in Minutes:', recipeDetails.readyInMinutes);
        console.log('Summary:', recipeDetails.summary);
        console.log('Instructions:', recipeDetails.instructions);

        console.log('Ingredients:');

        recipeDetails.extendedIngredients.forEach((ingredient: any) => {
            console.log(`${ingredient.name}: ${ingredient.amount} ${ingredient.unit}`);
        });

        console.log('Equipment:');

        recipeDetails.analyzedInstructions.forEach((instruction: any) => {
            instruction.step.equipment.forEach((equipment: any) => {
                console.log(equipment.name);
            });
        });

    } catch (error) {
        console.error('Error while getting the recipe details', error);
    }
}

