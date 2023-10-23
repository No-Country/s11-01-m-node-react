import axios from "axios";


export async function getRecipeDetails(): Promise<any> {

    try {

        const response = await
            axios.get(`https://api.spoonacular.com/recipes/642468/information?includeNutrition=false&apiKey=${process.env.apiKey}`
            );

        const recipeDetails = response.data;

        const title = recipeDetails.title;
        const Image = recipeDetails.image;
        const ReadyinMinutes = recipeDetails.readyInMinutes;
        const Summary = recipeDetails.summary;
        const Instructions = recipeDetails.instructions;


        const ingredients = recipeDetails.extendedIngredients.map((ingredient: any) => {
            name: ingredient.name;
            amount: ingredient.amount;
            unit: ingredient.unit;
        });

        //Obtener detalles del equipo en formato JSON

        const equipmentResponse = await axios.get(`https://api.spoonacular.com/recipes/642468/equipmentWidget.json?apiKey=${process.env.apiKey}`
        );

        const equipmentData = equipmentResponse.data;

        const equipment = equipmentData.equipment.map((equipment: any) => {
            name: equipment.name;
            image: equipment.image
        });
        return {
            title,
            Image,
            ReadyinMinutes,
            Summary,
            Instructions,
            ingredients,
            equipment
        }

    } catch (error) {
        console.error('Error while getting the recipe details', error);
        return null;
    }
}
