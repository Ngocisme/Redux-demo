import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  sum: 5,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    sumAll: (state, action) => {
      state.value += action.payload;
    },
    minusAll: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, sumAll, minusAll } = counterSlice.actions;
export default counterSlice.reducer;
