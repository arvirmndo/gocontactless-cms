import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home"
import Cart from "./Pages/Cart";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/"    element = {<Home />} />  
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();