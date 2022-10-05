import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  chapter: string[];
} = {
  chapter: [],
};

const HistorySlice = createSlice({
  name: "history",
  initialState: initialState,
  reducers: {
    addChapter: (state, action) => {
      const isExist = state.chapter.some(
        (item: string) => item === action.payload
      );
      console.log(isExist);
      if (!isExist && action.payload !== "/[slug]/[chap]/") {
        state.chapter = [...state.chapter, action.payload];
        localStorage.setItem("history", JSON.stringify(state.chapter));
      }
    },
    setChapter: (state, action) => {
      state.chapter = action.payload;
      localStorage.setItem("history", JSON.stringify(action.payload));
    },
  },
});

export const { addChapter, setChapter } = HistorySlice.actions;
export default HistorySlice.reducer;
