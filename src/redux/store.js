import { configureStore } from "@reduxjs/toolkit";
import themaSlice from "./themaSlice";

const store = configureStore({
  reducer: {
    thema: themaSlice
  }
});

export default store