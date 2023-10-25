import { Icon } from "@iconify/react";
import './card.css'

const data= {
    img: "https://res.cloudinary.com/danb0chax/image/upload/v1698244998/cookmatch/CardImg_rd7bgx.png",
    name: "Pokebowl",
    dietType: "Glutenfree",
    time: "15-20min"

}

const Recipecard = () => {
  return (
    <div className="card-box">
        <img src={data.img} alt={data.name} />
        <div className="text-box">
        <p>{data.name}</p>
        <div className="secondary-text-box"> 
        <div>
        <p className="diet-type-mobile">{data.dietType}</p>
        </div>
        <div className="second-line">
        <Icon icon="mdi:clock-outline" className="clock" />
        <p>{data.time}</p>
        </div>
        </div>
       
        </div>
        </div>
  )
}

export default Recipecard