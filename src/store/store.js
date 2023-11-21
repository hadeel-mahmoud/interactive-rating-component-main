import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./ratingSlice";
export default configureStore({
  reducer: {
    rating: ratingReducer,
  },
});
