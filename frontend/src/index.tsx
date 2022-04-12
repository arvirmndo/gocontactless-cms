import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import Home from "./Pages/Home"
import Cart from "./Pages/Cart";
import reportWebVitals from "./reportWebVitals";
import ItemDetail from "./Pages/ItemDetail";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item-details" element={<ItemDetail/>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();