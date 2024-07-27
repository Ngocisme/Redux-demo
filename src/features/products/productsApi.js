import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiProducts } from "../helpers/apiUrl";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const res = await axios.get(apiProducts);
    if (res.status === 200) {
      return res.data;
    } else {
      console.log("check error", res);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const res = await axios.get(`${apiProducts}/${productId}`);
    return res.data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct) => {
    const res = await axios.post(apiProducts, newProduct);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    const res = await axios.delete(`${apiProducts}/${productId}`);

    return res.data;
  }
);
