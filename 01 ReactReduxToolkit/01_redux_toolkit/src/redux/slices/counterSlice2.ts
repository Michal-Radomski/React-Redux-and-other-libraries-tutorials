import {createSlice} from "@reduxjs/toolkit";

const initialState: RootState = {
  value: 0,
};

export const counterSlice2 = createSlice({
  name: "counter2",
  initialState: initialState,
  reducers: {
    increment: (state: RootState) => {
      state.value++;
    },
    decrement: (state: RootState) => {
      state.value--;
    },
    increaseByAmount: (state: RootState, action: Dispatch) => {
      state.value = action.payload;
    },
  },
});

// Generating the actions creators
export const {increment, decrement, increaseByAmount} = counterSlice2.actions;

// Export reducers
export default counterSlice2.reducer;
