import TopRatedRestaurant from "./TopRatedRestaturant";
import '../styles/search.css';
import  {restaurantObject} from '../utils/restaurantMockData.js';
import PropTypes from 'prop-types';

Search.propTypes = {
    searchFn : PropTypes.func
};

function Search(props){
   
    return (
        <>
            <div className="alignSearch">
                <input type="text" name="" id=""  onChange={(e)=>props.searchFn(e.target.value)}/>
                <button className="searchButton">Search</button>
            </div>
        </>
    )
}
export default Search;