
import "./home.css";
import { Icon } from '@iconify/react';
import SelectDiet from "./SelectDiet";
import PropTypes from 'prop-types';



const SearchInput = ({handleSubmit, handleChange, searchInput, selectedIngredients, handleIngredientRemove, handleDiet, sendIngredients, error}) => {
  return (
    <>
    <div className="background">     
      <h4 className="title-one">Find perfect recipes</h4>
      <div className="form-box">
        <form className="search-section" onSubmit={handleSubmit}>
          <div className="search-box">
            <span className="search-icon">
            <Icon icon="mdi:magnify" className="icon"/>
            </span>
            <input
              type="text"
              onChange={handleChange}
              value={searchInput}
              className="input"
              placeholder="Type ingredient"
            />
          </div>
          <div>
            <button type="submit" className="add-button">Add</button>
          </div>
        </form>
        <div className="selected-ingredients">
        {selectedIngredients.map((ingredient, index) =>
          
         <div key={index} className="ingredients">
            <p>
              {ingredient}{" "}
            </p>
            {ingredient &&
              <button onClick={() => handleIngredientRemove(index)}>
                <Icon icon="mdi:close" className="close-icon"/>
              </button>}
          </div>
          
        )}
      </div>
      {error &&
      <div className="ingredient-error">
           <p>{error}</p>
           </div>}
      </div>
     
      <SelectDiet handleDiet={handleDiet}/>
      <button className="search-button" type="submit" onClick={(e)=>sendIngredients(e)}>
        Search Recipies
      </button>
    </div>
    </>
  );
};
SearchInput.propTypes = {
  handleDiet: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleIngredientRemove: PropTypes.func.isRequired,
  error:PropTypes.string,
  searchInput: PropTypes.string,
  selectedIngredients: PropTypes.array,
  sendIngredients: PropTypes.func.isRequired

};
export default SearchInput;

  