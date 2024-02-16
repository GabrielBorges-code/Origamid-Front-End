import { createSlice } from "@reduxjs/toolkit";

// function sum(payload) {
//   return { type: "SOMAR", payload, localStorage: "somar" };
// }

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
    sum: {
      reducer: (state, action) => {
        return { total: state.total + action.payload };
      },
      prepare: (payload) => {
        return { payload, meta: "local" };
      },
    },
  },
  prepare() {},
});

export const { increment, reduce, sum } = slice.actions;
export default slice.reducer;
