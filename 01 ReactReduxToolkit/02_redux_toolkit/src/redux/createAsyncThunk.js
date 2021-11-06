import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// Create Th Actions
export const fetchPost = createAsyncThunk("post/list", async (payload, {rejectWithValue, getState, dispatch}) => {
  try {
    // const post =await axios.get("https://jsonplaceholder.typicode.com/posts")
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
  } catch (error) {
    return error?.response;
  }
});

// Slices
const postSlices = createSlice({
  name: "post",
  initialState: {},
  extraReducers: {
    // Handling pending
    [fetchPost.pending]: (state, acton) => {
      state.loading = true;
    },

    // Handling fulfilled
    [fetchPost.fulfilled]: (state, acton) => {
      state.postList = acton.payload;
      state.loading = false;
    },

    // Handling rejection
    [fetchPost.rejected]: (state, acton) => {
      state.postList = acton.payload;
      state.error = acton.payload;
    },
  },
});

export default postSlices.reducer;
