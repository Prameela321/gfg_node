import TopRatedRestaurant from "./TopRatedRestaturant";
import '../styles/search.css';
import  {restaurantObject} from '../utils/restaurantMockData.js';
import PropTypes from 'prop-types';
import { useState } from "react";

SearchDuplicate.propTypes = {
    searchFn : PropTypes.func
};

function SearchDuplicate(props){
   const [searchText,setSearchText] = useState("");

   function updateSearchText(){
    //   props.searchFn(searchText);
   }

    return (
        <>
            <div className="searchButton">
                <input type="text" name="" id=""  onChange={(e)=>updateSearchText(e.target.value)}/>
                <button className="searchButton" onClick={()=>filteredResult}>SearchDuplicate</button>
            </div>
        </>
    )
}
export default SearchDuplicate;