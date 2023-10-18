import dietTexts from "../../assets/Texts/diets.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { inputIngredients } from "../../store/actions/IngredientsAction";

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
    <div className="background">
      <h4 className="title-one">Cook with what you have: </h4>
      <h4 className="title-two">find perfect recipes</h4>
      <div>
        <form className="search-section" onSubmit={handleSubmit}>
          <div className="search-box">
            <span className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M26.1333 28L17.7333 19.6C17.0667 20.1333 16.3 20.5556 15.4333 20.8667C14.5667 21.1778 13.6444 21.3333 12.6667 21.3333C10.2444 21.3333 8.19444 20.4944 6.51667 18.8167C4.83889 17.1389 4 15.0889 4 12.6667C4 10.2444 4.83889 8.19444 6.51667 6.51667C8.19444 4.83889 10.2444 4 12.6667 4C15.0889 4 17.1389 4.83889 18.8167 6.51667C20.4944 8.19444 21.3333 10.2444 21.3333 12.6667C21.3333 13.6444 21.1778 14.5667 20.8667 15.4333C20.5556 16.3 20.1333 17.0667 19.6 17.7333L28 26.1333L26.1333 28ZM12.6667 18.6667C14.3333 18.6667 15.75 18.0833 16.9167 16.9167C18.0833 15.75 18.6667 14.3333 18.6667 12.6667C18.6667 11 18.0833 9.58333 16.9167 8.41667C15.75 7.25 14.3333 6.66667 12.6667 6.66667C11 6.66667 9.58333 7.25 8.41667 8.41667C7.25 9.58333 6.66667 11 6.66667 12.6667C6.66667 14.3333 7.25 15.75 8.41667 16.9167C9.58333 18.0833 11 18.6667 12.6667 18.6667Z"
                  fill="#1C1B1F"
                />
              </svg>
            </span>
            <input
              type="text"
              onChange={handleChange}
              value={searchInput}
              className="input"
              placeholder="Type ingredient"
            />
          </div>
          <div className="add-box">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
      <div className="selected-ingredients">
        {selectedIngredients.map((ingredient, index) =>
          <div key={index} className="ingredients">
            <p>
              {ingredient}{" "}
            </p>
            {ingredient &&
              <button onClick={() => handleIngredientRemove(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4.26668 12.6666L3.33334 11.7333L7.06668 7.99998L3.33334 4.26665L4.26668 3.33331L8.00001 7.06665L11.7333 3.33331L12.6667 4.26665L8.93334 7.99998L12.6667 11.7333L11.7333 12.6666L8.00001 8.93331L4.26668 12.6666Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>}
          </div>
        )}
      </div>
      <div className="diets">
        <div className="diet-box">
          {dietTexts.diets.types.map((type, index) =>
            <button
              key={index}
              className="diet-button"
              onClick={() => handleDiet(type)}
            >
              {type}
            </button>
          )}
        </div>
      </div>
      <button className="search-button" type="submit" onClick={(e)=>sendIngredients(e)}>
        Search Recipies
      </button>
    </div>
  );
};

export default SearchInput;
