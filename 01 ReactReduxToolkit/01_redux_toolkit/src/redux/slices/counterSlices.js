import {createAction, createReducer} from "@reduxjs/toolkit";

export const increment = createAction("increment/counter");
export const decrement = createAction("decrement/counter");
export const increaseByAmount = createAction("increaseByAmount/counter");

// let action = increment();
// console.log("action:", action);

const initialState = {
  value: 0,
};

// Reducer:
// 1. Using Builder Notation (preferred):

export const counterSlices = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.value++;
  });
  builder.addCase(decrement, (state, action) => {
    state.value--;
  });
  builder.addCase(increaseByAmount, (state, action) => {
    state.value = action.payload;
  });
});

// 2. Using Map Notation

// export const counterSlices = createReducer(initialState, {
//   [increment]: (state, action) => {
//     state.value++;
//   },
//   [decrement]: (state, action) => {
//     state.value--;
//   },
//   [increaseByAmount]: (state, action) => {
//     state.value = action.payload;
//   },
// });
