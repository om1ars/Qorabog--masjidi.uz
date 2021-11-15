import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingle = createAsyncThunk(
  "single/fetchSingle",
  async (number) => {
    const data = await axios(
      `https://api.alquran.cloud/v1/surah/${number}`
    ).then((res) => res.data.data.ayahs);
    return data;
  }
);

const initialState = {
  single: [],
};

const singleQuran = createSlice({
  name: "single",
  initialState,
  reducers: {
      remove(state, action)  {}
  },
  extraReducers: {
    [fetchSingle.pending]: () => {
      console.log("pending");
    },
    [fetchSingle.rejected]: () => {
      console.log("rejected");
    },
    [fetchSingle.fulfilled]: (state, { payload }) => {
      return { ...state, single: payload };
    },
  },
});

export const {} = singleQuran.actions;
export default singleQuran.reducer;
