import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  fetchAllProducts,
  fetchProductById,
} from "./productsApi";

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
      })

      // Add new product
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listProducts.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "Failed";
        state.error = "Cannot add product";
      })

      // Delete product
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listProducts = state.listProducts.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "Failed";
        state.error = "Cannot delete product";
      });
  },
});

export default productsSlice.reducer;
