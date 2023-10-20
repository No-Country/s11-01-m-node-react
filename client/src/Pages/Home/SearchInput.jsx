import dietTexts from "../../assets/Texts/diets.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { inputIngredients } from "../../store/actions/IngredientsAction";
import { Icon } from '@iconify/react';
import SelectDiet from "./SelectDiet";
import {isMobileOnly } from "react-device-detect"
import SelectDietMobile from "./SelectDietMobile";
import { Link } from "react-router-dom";



const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [dietTypeSelected, setDietTypeSelected] = useState("");
  const [error, setError] =useState("")

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
            setError("")
          } else {
            setError("You can select a maximum of 3 ingredients.");
          }
        }
      } else {
        setError("Ingredient is already selected.");
      }
    } else {
      setError("Ingredient not found in our list.");
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
  };


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
      {isMobileOnly ?
      <SelectDietMobile handleDiet={handleDiet} /> :
      <SelectDiet handleDiet={handleDiet}/>}
      <button className="search-button" type="submit" onClick={(e)=>sendIngredients(e)}>
        Search Recipies
      </button>
      <Link to='/results'>Go to Recipies</Link>
    </div>
    </>
  );
};

export default SearchInput;
