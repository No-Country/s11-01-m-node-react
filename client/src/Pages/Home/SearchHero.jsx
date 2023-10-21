import {isMobileOnly} from 'react-device-detect'
import PropTypes from 'prop-types';

const SearchHero = ({SearchHeader, text}) => {
  return (
    <div> {isMobileOnly ? (null) :  
    (
    <div className='hero'>
        <img src={SearchHeader} className="search-header" />
         <p className='hero-title' dangerouslySetInnerHTML={{ __html: text}}></p>
      
    </div>
    )}
    </div>
  )
}
SearchHero.propTypes={
  SearchHeader:PropTypes.string,
  text: PropTypes.string,
 
}
export default SearchHero