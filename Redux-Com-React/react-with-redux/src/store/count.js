import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "count",
  initialState: {
    total: 0,
  },
  reducers: {
    increment(state) {
      return { total: state.total + 1 };
    },
    reduce(state) {
      return { total: state.total + 1 };
    },
  },
});

export const { increment, reduce } = slice.actions;
export default slice.reducer;
