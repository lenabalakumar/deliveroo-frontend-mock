import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "../features/restaurantSlice";

const store = configureStore({
  reducer: {
    restaurantDetails: restaurantSlice,
  },
});

export default store;
