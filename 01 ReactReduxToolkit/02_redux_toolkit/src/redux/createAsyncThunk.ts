import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

// Create The Actions
export const fetchPost: Fetch = createAsyncThunk<RootState>(
  "post/list",
  async (payload, {rejectWithValue, getState, dispatch}) => {
    try {
      // const post =await axios.get("https://jsonplaceholder.typicode.com/posts")
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return data;
    } catch (error: Fetch) {
      return error?.response;
    }
  }
);

const initialState = {} as RootState;

// Slices
const postSlices = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // Handling pending
    [fetchPost.pending]: (state: RootState) => {
      state.loading = true;
    },

    // Handling fulfilled
    [fetchPost.fulfilled]: (state: RootState, action: PayloadAction<any>) => {
      state.postList = action.payload;
      state.loading = false;
    },

    // Handling rejection
    [fetchPost.rejected]: (state: RootState, action: PayloadAction<any>) => {
      state.postList = action.payload;
      state.error = action.payload;
    },
  },
});

export default postSlices.reducer;
