import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY: ProcessEnv = process.env.REACT_APP_OPEN_WEATHER_KEY;
// console.log("API_KEY:", API_KEY);

// Action
export const fetchWeatherAction: Dispatch = createAsyncThunk(
  "weather/fetch",
  async (payload, {rejectWithValue, getState, dispatch}) => {
    try {
      const {data}: Fetch = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}`);
      return data;
    } catch (error: any) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState: RootState = {
  error: undefined,
  loading: false,
};

// Slice
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  // - Map Notation
  // extraReducers: {
  //   //Pending
  //   [fetchWeatherAction.pending]: (state: RootState, action: PayloadAction<any>) => {
  //     state.loading = true;
  //     state.weather = undefined;
  //     state.error = undefined;
  //   },
  //   //Fulfilled
  //   [fetchWeatherAction.fulfilled]: (state: RootState, action: PayloadAction<any>) => {
  //     state.weather = action?.payload;
  //     state.loading = false;
  //     state.error = false;
  //   },
  //   //Rejected
  //   [fetchWeatherAction.rejected]: (state: RootState, action: PayloadAction<string>) => {
  //     state.loading = false;
  //     state.weather = undefined;
  //     state.error = action?.payload;
  //   },
  // },

  // - Recommended "builder callback" notation
  extraReducers: (builder) => {
    //Pending
    builder.addCase(fetchWeatherAction.pending, (state: RootState) => {
      state.loading = true;
      state.weather = undefined;
      state.error = undefined;
    });
    //Fulfilled
    builder.addCase(fetchWeatherAction.fulfilled, (state: RootState, action: PayloadAction<any>) => {
      state.weather = action?.payload;
      state.loading = false;
      state.error = false;
    });
    //Rejected
    builder.addCase(fetchWeatherAction.rejected, (state: RootState, action: PayloadAction<string>) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
