import "./detail.css";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dietTexts from "../../assets/Texts/diets.json";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const RecipiesDetail = () => {
  const { id } = useParams();
  //const data=dietTexts.recipies.find(p=> p.id=== parseInt(id))
  console.log(id);
  const details = useSelector((state) => state.ingredients.details);

  console.log(details[id].details);

  const [data, setData] = useState(details[id].details);
  console.log(data);

  return (
    <>
      <div className="background">
        <>
          <Link to="/home">Home | </Link>
          <Link>Recipies | </Link>
          <Link>{data?.title}</Link>
        </>
        <div className="hero-recipie-detail">
          <div className="text-box-detail">
            <h5>{data?.title}</h5>
            <p>{data?.ReadyinMinutes}min</p>

          </div>
          <div className="img-box-detail">
            <img src={data?.Image} alt="" />
          </div>
        </div>
        <div className="instructions">
          <div className="ingredients-detail">
            <h5>Ingredients</h5>
            {data?.ingredients.map((el, key) =>  <p key={el.name}>{el.name} - {el.amount} {el.unit}</p>)}
          </div>
          <div className="ingredients-detail">
            <h5>Directions</h5>
            <p dangerouslySetInnerHTML={{ __html: data?.Instructions }}></p>
          </div>

        </div>
      </div>

      <div className="enjoy">
        <Icon icon="mdi:noodles" className="icon" />
        <p>ENJOY YOUR MEAL!</p>
      </div>
    </>
  );
};

export default RecipiesDetail;
