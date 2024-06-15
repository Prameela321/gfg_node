import '../styles/search.css';
function TopRatedRestaurant(props){
    return (
        <>
            <button className="searchButton" onClick={props.ratedFn}>
                TopRated
            </button>
            {/* <label className="">
                <input type="checkbox"> <span className=""></span></input>
                
            </label> */}
        </>
    )
}

export default TopRatedRestaurant;