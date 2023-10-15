import { useState, useEffect } from "react"
import dietTexts from "../../assets/Texts/diets.json"

const SearchRecipies = () => {
  const dietData= dietTexts
  const [userSelection, setUserSelection]= useState({
    dietType:"",
    firstIngredient: "",
    secondIngredient: "" || null,
    thirdIngredient: "" || null
  })
  const [ingredients, setIngredients]= useState([])
  
  useEffect(() => {
    if (userSelection.dietType) {
      const selectedIngredients = dietData.lists[userSelection.dietType];
      setIngredients(selectedIngredients);
    } else {
      setIngredients([]);
    }
  }, [userSelection.dietType]);
  
 
 
  const secondIngredientList = ingredients.filter(ingredient => ingredient !== userSelection.firstIngredient);
  const lastIngredientList = secondIngredientList.filter(secondIngredientList => secondIngredientList !== userSelection.secondIngredient);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchData = {
      dietTypeSelected: userSelection.dietType, 
      ingredientsSelected: [userSelection.firstIngredient, userSelection.secondIngredient, userSelection.thirdIngredient]
    }
    console.log(searchData)
  };

  return (
    <>
    <form onSubmit={handleFormSubmit}>
    <select value={userSelection.dietType} 
    onChange={(e) => setUserSelection({ ...userSelection, dietType: e.target.value })}>
             <option value="">Choose a diet type</option>
             {dietData.diets.types.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select> 
      <select value={userSelection.firstIngredient} onChange={(e) => setUserSelection({ ...userSelection, firstIngredient: e.target.value })}>
             <option value="">Choose an ingredient</option>
             {ingredients.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select> 
      <select value={userSelection.secondIngredient} onChange={(e) => setUserSelection({ ...userSelection, secondIngredient: e.target.value })}>
             <option value="">Choose other ingredient</option>
             {secondIngredientList.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select> 
      <select value={userSelection.thirdIngredient} onChange={(e) => setUserSelection({ ...userSelection, thirdIngredient: e.target.value })}>
             <option value="">Choose one more</option>
             {lastIngredientList.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select> 
      <div>
      <button type="submit">Submit</button>
      </div>
      </form>
    </>
  )
}

export default SearchRecipies