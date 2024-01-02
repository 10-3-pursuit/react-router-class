import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// we need to import BrowserRouter - it will track the URL addresses and it will store the history
// we will have the ability to use the forward and back buttons in our browser

// i will create a component to wrap my App in my BrowserRouter
const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
