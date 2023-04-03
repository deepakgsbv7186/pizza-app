import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
// ReactDom.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
