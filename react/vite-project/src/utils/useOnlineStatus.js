import {userState} from 'react';

function userOnlineStatus(){
    let [userStatus,setUserStatus] = useState(false);
    window.addEventListener('online',()=>{
        setUserStatus(true);
    } )
     window.addEventListener('offline',()=>{
        setUserStatus(false);
    } )
    return userStatus;
}
export default userStatus;