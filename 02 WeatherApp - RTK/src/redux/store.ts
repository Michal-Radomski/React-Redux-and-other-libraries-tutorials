import {configureStore} from "@reduxjs/toolkit";

import weatherSlice from "./weatherSlices";

const store = configureStore({
  reducer: weatherSlice,
});

export default store;
