import { useState } from "react"
const types=[
  "vegan", "vegetarian", "lowfat","glutenfree"
]
const ingredients=[
  "meet", "chiken", "milk","bananas", "apples", "eggs", "flour", "bacon", "butter", "onions", "tomatoes"
]
const SearchRecipies = () => {
  const [userSelection, setUserSelection]= useState({
    foodType:"",
    ingredients1: "",
    ingredients2: "",
    ingredients3: ""
  })
  
  const secondIngredientList = ingredients.filter(ingredient => ingredient !== userSelection.ingredients1);
  const lastIngredientList = secondIngredientList.filter(secondIngredientList => secondIngredientList !== userSelection.ingredients2)

  return (
    <>
    <select value={userSelection.foodType} onChange={(e) => setUserSelection({ ...userSelection, foodType: e.target.value })}>
             <option value="">Choose a Type</option>
             {types.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select> 
      <select value={userSelection.ingredients1} onChange={(e) => setUserSelection({ ...userSelection, ingredients1: e.target.value })}>
             <option value="">Choose an ingredient</option>
             {ingredients.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select> 
      <select value={userSelection.ingredients2} onChange={(e) => setUserSelection({ ...userSelection, ingredients2: e.target.value })}>
             <option value="">Choose other ingredient</option>
             {secondIngredientList.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select> 
      <select value={userSelection.ingredients3} onChange={(e) => setUserSelection({ ...userSelection, ingredients3: e.target.value })}>
             <option value="">Choose one more</option>
             {lastIngredientList.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select> 
    </>
  )
}

export default SearchRecipies