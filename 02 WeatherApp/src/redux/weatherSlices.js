import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;
// console.log("API_KEY:", API_KEY);

// Action
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, {rejectWithValue, getState, dispatch}) => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}`);
      const data = response?.data;
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Slices
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    loading: false,
    error: undefined,
  },
  extraReducers: (builder) => {
    //Pending
    builder.addCase(fetchWeatherAction.pending, (state, action) => {
      state.loading = true;
      state.weather = undefined;
      state.error = undefined;
    });
    //Fulfilled
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.loading = false;
      state.error = false;
    });
    //Rejected
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
