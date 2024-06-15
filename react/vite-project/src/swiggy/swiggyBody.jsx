import "../styles/swiggybody.css";
import RestaurantCard from "./RestaurantCard.jsx";
import { restaurantObject } from "../utils/restaurantMockData.js";
import Search from "./Search.jsx";
import SearchReplica from "./SearchReplica.jsx";
import TopRatedRestaurant from "./TopRatedRestaturant.jsx";
import { useState, useEffect } from "react";
import SearchDuplicate from "./SearchDuplicate.jsx";
import { Link } from "react-router-dom";

function SwiggyBody() {
  let [filteredResult, setFilteredResult] = useState(restaurantObject);
  let [ratedButton, setRatedButton] = useState(false);
  let [searchText, setSearchText] = useState("");

  function searchRestatusrant(val) {
    setSearchText(val);
  }
  useEffect(() => {
    let searchResult = restaurantObject.filter((res) =>
      res.nameRestaurant.toLowerCase().includes(searchText.toLowerCase())
    );
    if (ratedButton) {
      searchResult = searchResult.filter((res) => parseFloat(res.rating) > 4.5);
    }
    setFilteredResult(searchResult);
  }, [searchText, ratedButton]);

  function filteredRestaurant() {
    setRatedButton(true);
  }

  const resComponent = filteredResult.map((resData) => (
    <Link to= {"/restaurant/"+resData.row} key={resData.row}>
      <RestaurantCard key={resData.row} resDetails={resData} />
    </Link>
  ));
  return (
    <>
      <div className="search">
        {/* <Search searchFn = {searchRestatusrant} /> */}
        <TopRatedRestaurant ratedFn={filteredRestaurant} />
        <SearchReplica searchFn={searchRestatusrant} />
        {/* <SearchDuplicate searchFn={searchRestatusrant}/> */}
      </div>
      <div className="res-container">{resComponent}</div>
    </>
  );
}

export default SwiggyBody;
