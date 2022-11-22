import React from 'react';
import logo from './logo.svg';
import './App.css';
import Helloworld from './components/helloworld';

//<div><h1>Welcome to FS Program</h1><div>

function App() {
  const data = "Sample Text";

  const handleCustomEvent = (e)=>{
    console.log(e);
  }
  
  return (
      <div>
        <h1>I am from React Page</h1>
        <Helloworld raisedata={handleCustomEvent} name={data}/>
      </div>
  );
}

export default App;
//React.createElement("div",{},React.createElement("h1",{},"i am from React"))