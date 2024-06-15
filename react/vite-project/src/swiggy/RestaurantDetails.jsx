import { useParams } from "react-router-dom";

function RestaurantDetails(){
    const params = useParams();
    console.log(params.resId)
    return (
        <>
         <h1>restaurantDetails</h1>
         <h1> Restaurant id :{params.resId}</h1>
        </>
    )
}
export default RestaurantDetails;