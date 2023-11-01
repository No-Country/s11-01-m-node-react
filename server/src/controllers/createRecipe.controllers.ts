import axios from "axios";
import { Request, Response } from "express";

export const createRecipe = async (req: Request, res: Response) => {
    const { title, ingredients, instructions, readyInMinutes, servings, mask } = req.body;

    const params = {
        apikey: req.params.apikey,
        title, ingredients, instructions, readyInMinutes, servings, mask
    };
    try {
        const response = await axios.post(
            'https://api.spoonacular.com/recipes/visualizeRecipe', params
        );
        res.status(200).json({
            code: 200,
            message: 'Recipe was created successfully',
            data: response.data,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            message: 'Error creating',
            data: null,
        });
    }
};