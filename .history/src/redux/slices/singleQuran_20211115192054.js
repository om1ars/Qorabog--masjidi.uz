import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingle = createAsyncThunk(
    'single/fetchSingle',
    
)

const initialState = {
  single: [],
};

const singleQuran = createSlice({
  name: "single",
  initialState,
  reducers: {},
});

export const {} = singleQuran.actions;
export default singleQuran.reducer;
