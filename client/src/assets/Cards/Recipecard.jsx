import "./card.css";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Recipecard = () => {
  

  const recipes = useSelector((state) => state.ingredients.recipes);
  const details = useSelector((state) => state.ingredients.details)

  const [dish, setDish] = useState([])
  const [detail, setDetil] = useState([])
  
  useEffect(() => {
    setDish(recipes)
    setDetil(details)
    console.log("Holaaaaa", dish);
  }, [recipes, details]);

  // const filteredRecipes = dietTexts.recipies.filter((recipeToShow) => {
  //   const dietTypeMatch =
  //     !dietTypeSelected || recipeToShow.dietType === dietTypeSelected;
  //   const ingredientsMatch =
  //     !selectedIngredients ||
  //     selectedIngredients.every((ingredient) =>
  //       recipeToShow.ingredients.some((recipeIngredient) =>
  //         recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())
  //       )
  //     );

  //   return dietTypeMatch && ingredientsMatch;
  // });

  return (
    <>
      { dish && dish.map((recipie, index) => (
        <Link key={index} to={`/detail/${index}`}>
          <div className="card-box">
            <img src={recipie.image} alt={recipie.title} />
            <div className="text-box">
              <p>{recipie.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
// Recipecard.propTypes = {
//   dietTypeSelected: PropTypes.string,
//   selectedIngredients: PropTypes.array,
// };

export default Recipecard;
