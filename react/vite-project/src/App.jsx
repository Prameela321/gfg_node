import './App.css';
import SwiggyHeader from  './swiggy/swiggyHeader.jsx';
import SwiggyBody from './swiggy/swiggyBody.jsx';
import SwiggyFooter from './swiggy/SwiggyFooter.jsx';
// import SwiggyBody from './swiggy/swiggyBodyReplica.jsx';

function App(){
  return (
    <>
       <SwiggyHeader/>
       <SwiggyBody/>
       <SwiggyFooter/>
    </>
  )
}

export default App;