import { useRouteError } from "react-router-dom";

function Error(){
    const err = useRouteError();
    return  (
        <>  
          <p> Please enter Correct Url</p>
          <p>{ err.data}</p>
          <p> { err.status }</p>
        </>
    )
}

export default Error;