export interface Result {
    id: number
    title: string
    image: string
    imageType: string
    usedIngredientCount: number
    missedIngredientCount: number
    missedIngredients: MissedIngredient[]
    usedIngredients: UsedIngredient[]
    unusedIngredients: UnusedIngredient[]
    likes: number
}

export interface MissedIngredient {
    id: number
    amount: number
    unit: string
    unitLong: string
    unitShort: string
    aisle: string
    name: string
    original: string
    originalName: string
    meta: string[]
    image: string
    extendedName?: string
}

export interface UsedIngredient {
    id: number
    amount: number
    unit: string
    unitLong: string
    unitShort: string
    aisle: string
    name: string
    original: string
    originalName: string
    meta: string[]
    image: string
    extendedName?: string
}

export interface UnusedIngredient {
    id: number
    amount: number
    unit: string
    unitLong: string
    unitShort: string
    aisle: string
    name: string
    original: string
    originalName: string
    meta: any[]
    image: string
}

export interface RecipeDetail {
    details: Details
}

export interface Details {
    id: number
    title: string
    Image: string
    ReadyinMinutes: number
    Summary: string
    Instructions: string
    ingredients: Ingredient[]
    equipment: Equipment[]
    glutenFree: boolean
    vegan: boolean
    vegetarian: boolean
    dairyFree: boolean
    lowFodMap: boolean
    veryPopular: boolean
    sustainable: boolean
    veryHealthy: boolean
}

export interface Ingredient {
    name: string
    amount: number
    unit: string
}

export interface Equipment {
    name: string
    image: string
}

const dietsChecked = (diets: { [x: string]: any; dairyFree?: boolean; vegetarian?: boolean; glutenFree?: boolean; vegan?: boolean, lowFodMap?: boolean, veryPopular?: boolean, sustainable?: boolean, veryHealthy?: boolean }, diet: string) => {
    return diets[diet]
}

const filterRecipesByDiet = (recipes: Result[], details: RecipeDetail[], diet: string) => {
    const filterDetails = details.filter(recipe => dietsChecked({
        dairyFree: recipe.details.dairyFree,
        vegetarian: recipe.details.vegetarian,
        glutenFree: recipe.details.glutenFree,
        vegan: recipe.details.vegan,
        lowFodMap: recipe.details.lowFodMap,
		veryPopular: recipe.details.veryPopular,
		sustainable: recipe.details.sustainable,
		veryHealty: recipe.details.veryHealthy
    }, diet
    ))

    const filterRecipes: Result[] = []

    recipes.forEach(recipe => {
        for (let i = 0; i < filterDetails.length; i++) {
            if (recipe.title === filterDetails[i].details.title) {
                filterRecipes.push(recipe)
            }
        }
    })

    return { filterRecipes, filterDetails };
}

export default filterRecipesByDiet;
