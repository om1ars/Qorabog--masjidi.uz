import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const quranSlice = createSlice({
  name: "quran",
  initialState,
  reducers: {
    removeFetchQuran
  },
});

export const {} = quranSlice.actions;
export default quranSlice.reducer;
