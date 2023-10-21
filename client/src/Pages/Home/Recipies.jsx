import PropTypes from 'prop-types';
import RecipiesSection from './RecipiesSection';


const Recipies = ({selectedIngredients, dietTypeSelected}) => {

  return (
    <>
    <div className='recipies-background'>
        <div className='search-description'>
            <div className='search-items'>
            <p className='subtitle'>Choseen ingredients:</p>
        {selectedIngredients.map((ingredient, index)=>(
            <div key={index} className='ingredient-list'>
            <p>{ingredient}</p>
            </div>
        ))}
        <p className={dietTypeSelected === '' ? "display-none" : 'subtitle'}>Diet type:</p>
        <p>{dietTypeSelected}</p>
        </div>
        <button className='new-button'>New Search</button>
        </div>
    </div>
    <RecipiesSection />
    </>
  )
}
Recipies.propTypes={
    selectedIngredients: PropTypes.array,
    dietTypeSelected: PropTypes.string
}
export default Recipies
