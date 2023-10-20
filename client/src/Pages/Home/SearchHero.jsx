import {isMobileOnly} from 'react-device-detect'
import SearchHeader from '../../assets/img/SearchHeader.png'

const SearchHero = () => {
  return (
    <div> {isMobileOnly ? (null) :  
    (
    <div>
        <img src={SearchHeader} className="search-header" />
        <p className='hero-title'>Have 3 ingredients at home?<br></br> We will suggest what to cook!</p>
    </div>
    )}</div>
  )
}

export default SearchHero