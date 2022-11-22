import * as React from "react";
import ReactDOM from "react-dom";
// import { ErrorBoundary } from "react-error-boundary";

export default function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}


