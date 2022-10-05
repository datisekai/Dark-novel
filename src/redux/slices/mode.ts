import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const ModeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("mode", action.payload);
    },
  },
});

export const { setMode } = ModeSlice.actions;
export default ModeSlice.reducer;
