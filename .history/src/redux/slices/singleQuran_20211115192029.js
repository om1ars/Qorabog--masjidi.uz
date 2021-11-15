import { createSlice } from "@reduxjs/toolkit";

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
