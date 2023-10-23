import SearchHero from "./SearchHero";
import SearchInput from "./SearchInput";
import dietTexts from "../../assets/Texts/diets.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { inputIngredients } from "../../store/actions/IngredientsAction";
import Recipies from "./Recipies";
import SearchHeader from '../../assets/img/SearchHeader.png'
import heroResult from '../../assets/img/heroResult.png'

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [dietTypeSelected, setDietTypeSelected] = useState("");
  const [error, setError] = useState("");
  const [showRecipies, setShowRecipes] = useState(false);

  const dispatch = useDispatch();
  const getState = useSelector(state => state.ingredients);

  const getReceta = () => {
    console.log(getState);
  };

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
            setError("");
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
    setShowRecipes(true);
    dispatch(inputIngredients(searchData));
    getReceta();
  };
  const restartSearch=(e)=>{
    e.preventDefault();
    setShowRecipes(false)
    setSelectedIngredients([])
    setDietTypeSelected("")
  }
console.log (selectedIngredients, dietTypeSelected )
  return (
    <div>
      <SearchHero SearchHeader={showRecipies=== true ? heroResult : SearchHeader} text={showRecipies=== true ? dietTexts.resultTitle : dietTexts.searchTitle}/>
      {showRecipies === true ? 
      <Recipies selectedIngredients={selectedIngredients} dietTypeSelected={dietTypeSelected} restartSearch={restartSearch} /> :
      <SearchInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        searchInput={searchInput}
        selectedIngredients={selectedIngredients}
        handleIngredientRemove={handleIngredientRemove}
        handleDiet={handleDiet}
        sendIngredients={sendIngredients}
        error={error}
      />}
    </div>
  );
};

export default Home;
