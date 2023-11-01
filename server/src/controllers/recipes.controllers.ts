import axios from "axios";


export async function getRecipeDetails(recipeId: number, key: string): Promise<any> {

		try {

			const response = await
				axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${key}`
				);

			const recipeDetails = response.data;

		const id = recipeDetails.id;
		const title = recipeDetails.title;
		const Image = recipeDetails.image;
		const ReadyinMinutes = recipeDetails.readyInMinutes;
		const Summary = recipeDetails.summary;
		const Instructions = recipeDetails.instructions;
		const glutenFree = recipeDetails.glutenFree;
		const vegan = recipeDetails.vegan;
		const vegetarian = recipeDetails.vegetarian;
		const dairyFree = recipeDetails.dairyFree;



			const ingredients = recipeDetails.extendedIngredients.map((ingredient: any) => ({
				name: ingredient.name,
				amount: ingredient.amount,
				unit: ingredient.unit
			}));

			//Obtener detalles del equipo en formato JSON

			const equipmentResponse = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/equipmentWidget.json?apiKey=${key}`
			);

			const equipmentData = equipmentResponse.data;

		const equipment = equipmentData.equipment.map((equipment: any) => ({
			name: equipment.name,
			image: equipment.image
		}));
		return {
			id,
			title,
			Image,
			ReadyinMinutes,
			Summary,
			Instructions,
			ingredients,
			equipment,
			glutenFree,
			vegan,
			vegetarian,
            dairyFree
		}

		} catch (error: any) {
			if (error.response && error.response.status === 401) {
				return { error: 'API Key limit reached' }
			}
			console.error('Error while getting the recipe details', error);
			return null;
		}
}
