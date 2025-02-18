import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./config/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Products/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./pages/AddProduct/AddProduct";
import DetailProduct from "./pages/DetailProduct/DetailProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/manage-product" Component={Product} />
          <Route path="/add-product" Component={AddProduct} />
          <Route path="/manage-product/:productId" Component={DetailProduct} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
