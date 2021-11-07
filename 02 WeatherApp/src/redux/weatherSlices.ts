import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY: ProcessEnv = process.env.REACT_APP_OPEN_WEATHER_KEY;
// console.log("API_KEY:", API_KEY);

// Action
export const fetchWeatherAction: Fetch = (_city: string) =>
  createAsyncThunk<RootState>("weather/fetch", async (payload, {rejectWithValue}: RootState) => {
    try {
      const response: Fetch = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}`
      );
      const data: RootState = response?.data;
      return data;
    } catch (error: any) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  });

const initialState: RootState = {
  loading: false,
  error: undefined,
};

// Slice
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Pending
    builder.addCase<any>(fetchWeatherAction.pending, (state: RootState) => {
      state.loading = true;
      state.weather = undefined;
      state.error = undefined;
    });
    //Fulfilled
    builder.addCase<any>(fetchWeatherAction.fulfilled, (state: RootState, action: PayloadAction<any>) => {
      state.weather = action?.payload;
      state.loading = false;
      state.error = false;
    });
    //Rejected
    builder.addCase<any>(fetchWeatherAction.rejected, (state: RootState, action: PayloadAction<string>) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
