import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Helloworld from './components/helloworld';
import { RouterConfig } from './components/routecfg';
import Navbar from './components/navbar';

//<div><h1>Welcome to FS Program</h1><div>

function App() {
  const data = "Sample Text";

  const handleCustomEvent = (e)=>{
    console.log(e);
  }
  
  return (
      <div>
        <Router>
          <Navbar/>
          <RouterConfig/>
        {/* <h1>I am from React Page</h1> */}
        {/* <Helloworld raisedata={handleCustomEvent} name={data}/> */}
        </Router>
      </div>
  );
}

export default App;
//React.createElement("div",{},React.createElement("h1",{},"i am from React"))