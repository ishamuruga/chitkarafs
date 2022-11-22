import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Helloworld from "./components/helloworld";
import Userentry from "./components/userentry";
import Newuserreg from "./components/newuser";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./core/error-boundary";
import StudentReg from "./components/studentreg";

function App() {
  const text = "Hi from React";
  const p = "high";
  return (

    <>
      <div className="blue">
        <h1>Welcome to Virtusa-Chitkara Full Stack Program</h1>
      </div>
      <div>
        <StudentReg></StudentReg>
        {/* <Helloworld message={text} priority={p}/>
        <Userentry/>         */}
      </div>
      </>
  );
}

export default App;
