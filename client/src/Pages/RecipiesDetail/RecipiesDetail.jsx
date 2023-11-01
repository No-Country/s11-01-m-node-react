import './detail.css'
import { useParams, Link } from 'react-router-dom'
import dietTexts from '../../assets/Texts/diets.json'
import { Icon } from "@iconify/react"; 


const RecipiesDetail = () => {
    const {id} = useParams()
    const data=dietTexts.recipies.find(p=> p.id=== parseInt(id))
  
console.log(data.ingredients)
  return (
    <>
    <div className='background'>
        <>
        <Link to="/home">Home | </Link>  
        <Link >Recipies | </Link>
        <Link>{data.name}</Link>
        </>
        <div className='hero-recipie-detail'>
          <div className='text-box-detail'>
            <h5>{data.name}</h5>
            <p>{data.dietType}</p>
            <p>{data.time}</p>

          </div>
          <div className='img-box-detail'>
            <img src={data.img} alt="" />
          </div>

        </div>
        <div className='instructions'>
          <div className='ingredients-detail'>
            <h5>Ingredients</h5>
            {data.ingredients.map((ingredient, index)=>(
              <ul key={index}>
                <li>{ingredient}</li>

              </ul>
            ))}
          </div>
          <div className='ingredients-detail'>
          <h5>Directions</h5>
         <li className='step'>Step 1</li>
         <p>{data.directions.step1}</p>
         <li>Step 2</li>
         <p>{data.directions.step2}</p>
         <li>Step 3</li>
         <p>{data.directions.step3}</p>
         {data.directions.step4 &&
          <> <li>Step 4</li>
           <p>{data.directions.step4}</p> </>}
           {data.directions.step5 &&
         <> <li>Step 5</li>
         <p>{data.directions.step5}</p> </>}
           
          </div>

        </div>
    </div>
    
    <div className='enjoy'>
    <Icon icon="mdi:noodles" className="icon" />
    <p>ENJOY YOUR MEAL!</p></div>
    </>
  )
}

export default RecipiesDetail
