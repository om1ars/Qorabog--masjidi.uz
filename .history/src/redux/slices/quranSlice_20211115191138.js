import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuranAsync = createAsyncThunk(
  "quran/fetchQuranAsync",
  async () => {
    const data = await axios(""https://random-data-api.com/api/cannabis/random_cannabis?size=30"").then((res) => res.data);
    return data;
  }
);

const initialState = {
  quran: [],
};

const quranSlice = createSlice({
  name: "quran",
  initialState,
  reducers: {
    removeFetchQuran(state, action) {
      // state.quran = [];
    },
  }, extraReducers:{
    [fetchQuranAsync.pending]: () => {
      console.log('pending')
    }, 
    [fetchQuranAsync.rejected]: () => {
      console.log('rejected')
    },
    [fetchQuranAsync.fulfilled]: (state, {payload}) => {
      return {...state, quran: payload}
    }

  }
});

export const { removeFetchQuran } = quranSlice.actions;
export default quranSlice.reducer;
