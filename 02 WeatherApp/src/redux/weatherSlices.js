import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;
console.log("API_KEY:", API_KEY);

// Action
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, {rejectWithValue, getState, dispatch}) => {
    try {
      const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
