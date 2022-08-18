import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import Body from "./components/Body";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/restaurants">
            <Route index element={<Body />} />
            <Route path=":restaurantID" element={<Restaurant />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
