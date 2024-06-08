// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import  Button from './components/Button.jsx';
import {Text} from './components/Textcom.jsx';
import  {Paratext} from './components/Textcom.jsx';
import Profile from './components/profile.jsx';
import {useState} from 'react';
import Sharecomponent from './components/shared_component.jsx';
import Form from './components/form.jsx';
// import React from 'react';

function FirstApp() {
  // const [count, setCount] = useState(0)

  let [count,setCount] = useState(0);

  function handleClick(){
      setCount(count+1);
      console.log(`${count} button clicked`);
  }

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    // default code commented
    <>
      <h1>Learning Functional Components</h1>
      <Form/>
      <Button click={handleClick} c={count}/>
      <Button click={handleClick} c={count}/>
      <Text/>
      <Paratext/>
      { console.log("Hello")}
      <Profile/>
      <Sharecomponent/>
      
    </>
    // <React.Fragment></React.Fragment> short cut <></>
    // <Button/> can also be written as {Button()}  since this also a js function at the ends
  )
}

export default FirstApp
