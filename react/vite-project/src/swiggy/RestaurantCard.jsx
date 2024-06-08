import  {imgUrl} from  '../utils/restaurantMockData.js';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import '../styles/RestarurantCard.css';
import PropTypes from 'prop-types';

// RestaurantCard.propTypes =  {
//     id  : string,

// }
function RestaurantCard(props){
    const { id ,price, nameRestaurant ,rating ,delivery ,cuisines ,  location } = props.resDetails;
    return (
        <>
           <div className='restaurantCard'>
                <div className="img">
                    <img src={`${imgUrl}${id}`} alt="alt" height="200px" widht="200px"/>
                    <h2 className="offer">{price}</h2>
                </div>
                
                <div className="restaurantDetails">
                    <span><strong>{nameRestaurant}</strong></span>
                    <span>{rating}</span>
                    <span>{delivery}</span>
                    <span>{cuisines}</span>
                  <span>{location}</span>
                </div>
           </div>
        </>
    )
}
export default RestaurantCard;