import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiProducts } from "../helpers/apiUrl";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const res = await axios.get(apiProducts);
    return res.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const res = await axios.get(`${apiProducts}/${productId}`);
    return res.data;
  }
);
