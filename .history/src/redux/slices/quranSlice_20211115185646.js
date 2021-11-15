import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAsync = createAsyncThunk(
  const data = 
)

const initialState = {
  quran: []
};

const quranSlice = createSlice({
  name: "quran",
  initialState,
  reducers: {
    removeFetchQuran(state, action) {
      state.quran = []
    }
  },
});

export const {removeFetchQuran} = quranSlice.actions;
export default quranSlice.reducer;
