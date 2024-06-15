import TopRatedRestaurant from "./TopRatedRestaturant";
import '../styles/search.css';
import  {restaurantObject} from '../utils/restaurantMockData.js';
import PropTypes from 'prop-types';
import { useState } from "react";

SearchReplica.propTypes = {
    searchFn : PropTypes.func
};

function SearchReplica(props){
   const [searchText,setSearchText] = useState("");
    return (
        <>
            <div className="searchButton">
                <input type="text" name="" id=""  onChange={(e)=>{
                        if(e.target.value === ""){
                            console.log("test");
                            props.searchFn(e.target.value);
                        }
                        setSearchText(e.target.value)
                        
                    }
                }/>
                <button className="searchButton" onClick={()=>props.searchFn(searchText)}>SearchReplica</button>
            </div>
        </>
    )
}
export default SearchReplica;