import {useState} from 'react';

function useOnlineStatus(){
    let [userStatus,setUserStatus] = useState(false);
    window.addEventListener('online',()=>{
        setUserStatus(true);
    } )
     window.addEventListener('offline',()=>{
        setUserStatus(false);
    } )
    return userStatus;
}
export default useOnlineStatus;