import {useState} from 'react';

function Form(){
    let [name,setName] = useState("");
    let [message,setMessage] = useState("");
    function submitForm(e){
        e.preventDefault();
        console.log(name);
        console.log(message);
        console.log("form submitted");
    }
    return (
        <>
             <form>
                <input type="text" name="namef" id="namef" onChange={(e)=>setName(e.target.value)} />
                <textarea name="textarea" id="textarea" onChange={(e)=> setMessage(e.target.value)}> </textarea>
                <button type="submit" onClick={submitForm}>Submit</button>
                <h1> name is {name}</h1>
                <h2>message is {message}</h2>
             </form>
        </>
    )
}

export default Form;