import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductById } from "./productsApi";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    listProducts: [],
    product: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    console.log("Builder: ", builder);
    builder
      // fetchAllProduct
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listProducts = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      })
      // fetchProductById
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
