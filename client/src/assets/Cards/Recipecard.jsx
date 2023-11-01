import { Icon } from "@iconify/react";
import './card.css'
import dietTexts from '../Texts/diets.json'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Recipecard = ({dietTypeSelected, selectedIngredients}) => {
  
  const filteredRecipes = dietTexts.recipies.filter((recipeToShow) => {
    const dietTypeMatch = !dietTypeSelected || recipeToShow.dietType === dietTypeSelected;
    const ingredientsMatch = !selectedIngredients || 
      selectedIngredients.every((ingredient) =>
        recipeToShow.ingredients.some((recipeIngredient) =>
          recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())
        )
      );
     
      console.log("selectedIngredients:", selectedIngredients);
     
  
    return dietTypeMatch && ingredientsMatch
   
  });
  console.log(filteredRecipes)
  
  return (
    <>
    {filteredRecipes.map((recipie, index)=>(
    <Link  key={index} to={`/detail/${recipie.id}`}>
    <div className="card-box">
        <img src={recipie.img} alt={recipie.name} />
        <div className="text-box">
        <p>{recipie.name}</p>
        <div className="secondary-text-box"> 
        <div className="diet-card-box">
        <p className="diet-type-mobile">{recipie.dietType}</p>
        </div>
        <div className="second-line">
        <Icon icon="mdi:clock-outline" className="clock" />
        <p>{recipie.time}</p>
        </div>
        </div>
       
        </div>
        </div>
        </Link>
))}
        </>
  )
}
Recipecard.propTypes={
  dietTypeSelected: PropTypes.string,
  selectedIngredients: PropTypes.array
}

export default Recipecard