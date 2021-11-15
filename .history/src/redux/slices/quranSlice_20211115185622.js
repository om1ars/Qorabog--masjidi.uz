import { createSlice } from "@reduxjs/toolkit";

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

export const {} = quranSlice.actions;
export default quranSlice.reducer;
