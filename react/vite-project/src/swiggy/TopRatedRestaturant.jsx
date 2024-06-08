import '../styles/search.css';
function TopRatedRestaurant(props){
    return (
        <>
            <button className="searchButton" onClick={props.ratedFn}>
                TopRated
            </button>
        </>
    )
}

export default TopRatedRestaurant;