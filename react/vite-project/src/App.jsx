import './App.css';
import SwiggyHeader from  './swiggy/swiggyHeader.jsx';
import SwiggyBody from './swiggy/swiggyBody.jsx';
import SwiggyFooter from './swiggy/SwiggyFooter.jsx';
import { Outlet } from 'react-router-dom';
// import SwiggyBody from './swiggy/swiggyBodyReplica.jsx';

function App(){
  return (
    <>
       <SwiggyHeader/>
       {/* <SwiggyBody/> */}
       <Outlet/>
       <SwiggyFooter/>
    </>
  )
}

export default App;