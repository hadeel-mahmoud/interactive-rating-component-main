import { createSlice } from "@reduxjs/toolkit";

export const ratingSlice = createSlice({
  name: "rating",
  initialState: {
    value: -1,
  },
  reducers: {
    rate: (state, value) => {
      state.value = value;
    },
  },
});

export const { rate } = ratingSlice.actions;
export default ratingSlice.reducer;
