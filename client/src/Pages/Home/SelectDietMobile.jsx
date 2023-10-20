import PropTypes from 'prop-types';
import dietTexts from "../../assets/Texts/diets.json";
import { useState } from 'react';


const SelectDietMobile = ({ handleDiet }) => {
    const [showMore, setShowMore] = useState(false); 

  return (
    <div className="diets">
      <p>Select the type of diet you prefer</p>
      <div className="diet-box">
      {dietTexts.diets.slice(0, showMore ? undefined : 4).map((type, index) => (
          <div
            key={index}
            className="diet-img-button"
            onClick={(e) => handleDiet(e, type.types)}
          >
            <img src={type.img} alt={type.types} className="diet-img" />
            <p>{type.title}</p>
          </div>
        ))}
        {dietTexts.diets.length > 4 && !showMore && (
          <div className="more-button" onClick={() => setShowMore(true)}>
            See More
          </div>
        )}
      </div>
    </div>
  );
}

SelectDietMobile.propTypes = {
  handleDiet: PropTypes.func.isRequired,
};
export default SelectDietMobile