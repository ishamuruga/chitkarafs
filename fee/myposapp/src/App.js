import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Helloworld from "./components/helloworld";
import Userentry from "./components/userentry";
import Newuserreg from "./components/newuser";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./core/error-boundary";

function App() {
  const text = "Hi from React";
  const p = "high";
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="blue">
        <h1>Welcome to Virtusa-Chitkara Full Stack Program</h1>
      </div>
      <div>
        {/* <Helloworld message={text} priority={p}/> */}
        {/* <Userentry/> */}
        <Newuserreg></Newuserreg>
      </div>
    </ErrorBoundary>
  );
}

export default App;
