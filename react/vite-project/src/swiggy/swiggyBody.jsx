import '../styles/swiggybody.css';
import  RestaurantCard from './RestaurantCard.jsx'
import { restaurantObject } from '../utils/restaurantMockData.js';
import Search from './Search.jsx';
import SearchReplica  from './SearchReplica.jsx';
import TopRatedRestaurant from './TopRatedRestaturant.jsx';
import {useState ,useEffect} from 'react';
import SearchDuplicate from './SearchDuplicate.jsx';

function SwiggyBody(){
     let  [filteredResult,setFilteredResult] = useState(restaurantObject);
     let  [ratedButton,setRatedButton] = useState(false);
     let  [searchButton,setSearchButton] = useState(false);

    function searchRestatusrant(val){
        const searchResult = filteredResult.filter((res)=> res.nameRestaurant.toLowerCase().includes(val.toLowerCase()))
        setFilteredResult(searchResult);
        setSearchButton(true);
    
    }
    useEffect(()=>{
        if(ratedButton){
            const filterResult = filteredResult.filter(res=> parseFloat(res.rating) > 4.5);
            setFilteredResult(filterResult);
        }
        if(searchButton){
             // const filterResult = filteredResult.filter(res=> parseFloat(res.rating) > 4.5);
        // setFilteredResult(filterResult);
        }
    
    },[searchButton,ratedButton])
    
    function filteredRestaurant(){
        setRatedButton(true)
        const filterResult = filteredResult.filter(res=> parseFloat(res.rating) > 4.5);
       setFilteredResult(filterResult);
    }

    const  resComponent = filteredResult.map((resData ) => <RestaurantCard key = {resData.row} resDetails={resData}/>);
    return (
        <>
           <div className="search">
                {/* <Search searchFn = {searchRestatusrant} /> */}
                <TopRatedRestaurant ratedFn={filteredRestaurant}/>
                <SearchReplica searchFn={searchRestatusrant}/>
                {/* <SearchDuplicate searchFn={searchRestatusrant}/> */}
            </div>
            <div className="res-container">
                {resComponent}
            </div>
           
        </>
    )
}

export default SwiggyBody;
