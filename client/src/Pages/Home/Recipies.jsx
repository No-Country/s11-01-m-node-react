import PropTypes from "prop-types";
import RecipiesSection from "./RecipiesSection";

const Recipies = ({ selectedIngredients, dietTypeSelected, restartSearch }) => {
  return (
    <>
      <div className="background">
        <div className="search-description">
          <div className="search-items">
            <p className="subtitle">Choseen ingredients:</p>
            {selectedIngredients.map((ingredient, index) => (
              <div key={index} className="ingredient-list">
                <p>{ingredient}</p>
              </div>
            ))}
            <p
              className={dietTypeSelected === "" ? "display-none" : "subtitle"}
            >
              Diet type:
            </p>
            <p>{dietTypeSelected}</p>
          </div>
          <button className="new-button" onClick={(e) => restartSearch(e)}>
            New Search
          </button>
        </div>
        <RecipiesSection
          dietTypeSelected={dietTypeSelected}
          selectedIngredients={selectedIngredients}
        />
      </div>
    </>
  );
};
Recipies.propTypes = {
  selectedIngredients: PropTypes.array,
  dietTypeSelected: PropTypes.string,
  restartSearch: PropTypes.func.isRequired,
};
export default Recipies;
