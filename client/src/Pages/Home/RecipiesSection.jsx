import Recipecard from "../../assets/Cards/Recipecard"
import PropTypes from 'prop-types';

const RecipiesSection = ({dietTypeSelected, selectedIngredients}) => {
  return (
    <div className="recipies-box">
        <h3>We suggest these recipes</h3>
        <div className="card-section">
            <Recipecard dietTypeSelected={dietTypeSelected} selectedIngredients={selectedIngredients} />
        </div>
    </div>
  )
  
}
RecipiesSection.propTypes={
  dietTypeSelected: PropTypes.string,
  selectedIngredients: PropTypes.array
}

export default RecipiesSection