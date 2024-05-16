import Sharebutton  from './Sharebutton.jsx';
 import { useState } from "react";

function Sharecomponent(){
    let [click_count,setClickCount] = useState(0);

    function clickButton(){
        setClickCount(click_count+1);
        console.log(`${click_count} times clicked`);
    }

    let properties = {
        clickfn : clickButton,
        click_count : click_count
    };
    return (
        <>
        <Sharebutton properties= {properties} />
        <Sharebutton properties={properties}/> 
       </>
    )
}   

export default Sharecomponent;