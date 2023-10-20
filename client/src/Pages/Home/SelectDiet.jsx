import PropTypes from 'prop-types';
import dietTexts from "../../assets/Texts/diets.json";

const SelectDiet = ({ handleDiet }) => {
  return (
    <div className="diets">
      <p>Select the type of diet you prefer</p>
      <div className="diet-box">
        {dietTexts.diets.map((type, index) => (
          <button
            key={index}
            className="diet-img-button"
            onClick={(e) => handleDiet(e, type.types)}
          >
            <img src={type.img} alt={type.types} className="diet-img" />
            <p>{type.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

SelectDiet.propTypes = {
  handleDiet: PropTypes.func.isRequired,
};

export default SelectDiet;
