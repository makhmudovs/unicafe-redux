import { configureStore } from "@reduxjs/toolkit";
import unicafeReducer from "../features/unicafe/unicafeSlice";

export const store = configureStore({
  reducer: {
    unicafe: unicafeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
