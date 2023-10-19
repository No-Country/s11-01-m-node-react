import dietTexts from "../../assets/Texts/diets.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { inputIngredients } from "../../store/actions/IngredientsAction";
import { Icon } from '@iconify/react';
import SearchHeader from '../../assets/img/SearchHeader.png'
import { isMobileOnly } from "react-device-detect";


const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [dietTypeSelected, setDietTypeSelected] = useState("");

  const dispatch = useDispatch()
  const getState = useSelector((state) => state.ingredients)

  const getReceta = ()=> {
    console.log(getState)
  }

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const lowerCaseInput = searchInput.toLowerCase();
    if (
      dietTexts.lists.none
        .map(item => item.toLowerCase())
        .includes(lowerCaseInput)
    ) {
      if (
        !selectedIngredients
          .map(item => item.toLowerCase())
          .includes(lowerCaseInput)
      ) {
        if (searchInput.trim() !== "") {
          if (selectedIngredients.length < 3) {
            setSelectedIngredients([...selectedIngredients, searchInput]);
            setSearchInput("");
          } else {
            alert("You can select a maximum of 3 ingredients.");
          }
        }
      } else {
        alert("Ingredient is already selected.");
      }
    } else {
      alert("Ingredient not found in our list.");
    }
  };

  const handleIngredientRemove = index => {
    const updatedIngredients = [...selectedIngredients];
    updatedIngredients.splice(index, 1);
    setSelectedIngredients(updatedIngredients);
  };

  const handleDiet = dietType => {
    setDietTypeSelected(dietType);
  };

  const sendIngredients = e => {
    e.preventDefault();
    const searchData = {
      ingredientSelected: selectedIngredients,
      dietTypeSelected: dietTypeSelected
    };
    dispatch(inputIngredients(searchData))
    getReceta()
    
    console.log(searchData);
  };

  console.log(dietTypeSelected);

  return (
    <>
  {isMobileOnly ? null :  <img src={SearchHeader} className="search-header" />}
  
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
      </div>
     
      <div className="diets">
        <p>Select the type of diet you prefer</p>
        <div className="diet-box">
          {dietTexts.diets.map((type, index) =>
          <button key={index} className="diet-img-button" onClick={() => handleDiet(type.types)}>
            <img src={type.img} alt={type.types} className="diet-img"/>
            <p>
              {type.title}
            </p>
            </button>
          )}
        </div>
      </div>
      <button className="search-button" type="submit" onClick={(e)=>sendIngredients(e)}>
        Search Recipies
      </button>
    </div>
    </>
  );
};

export default SearchInput;
