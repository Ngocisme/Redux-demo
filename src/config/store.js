import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/reducers/counterSlice";
import productReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
});
