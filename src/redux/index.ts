import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices";
import HistorySlice from "./slices/history";
import ModeSlice from "./slices/mode";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    history: HistorySlice,
    mode: ModeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
