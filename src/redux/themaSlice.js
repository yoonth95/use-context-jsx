import { createSlice } from "@reduxjs/toolkit";

export const themaSlice = createSlice({
  name: 'thema',
  initialState: {
    isDark: false,
  },
  reducers: {
    setIsDark: (state, action) => {
      state.isDark = action.payload;
    }
  }
});

export const { setIsDark } = themaSlice.actions;
export default themaSlice.reducer;