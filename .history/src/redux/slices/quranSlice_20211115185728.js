import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuranAsync = createAsyncThunk(
  'quran/fetchQuranAsync',
  async () => {
    const data = await axios
  }
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
