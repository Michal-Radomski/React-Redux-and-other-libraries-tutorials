import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice2 = createSlice({
  name: "counter2",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.value++;
    },
    decrement: (state, action) => {
      state.value--;
    },
    increaseByAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Generating the actions creators
export const {increment, decrement, increaseByAmount} = counterSlice2.actions;

// Export reducers
export default counterSlice2.reducer;
