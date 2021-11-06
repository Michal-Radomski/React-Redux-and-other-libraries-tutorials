import {configureStore} from "@reduxjs/toolkit";

//- Store_1

// import {counterSlices} from "./slices/counterSlices";

// const store = configureStore({
//   reducer: {
//     counter: counterSlices,
//   },
// });

// export default store;

//- Store_2

import counterReducer2 from "./slices/counterSlice2";

const store = configureStore({
  reducer: {
    counter: counterReducer2,
  },
});

export default store;
