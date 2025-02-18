import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UnicafeState {
  good: number;
  ok: number;
  bad: number;
}

const initialState: UnicafeState = {
  good: 0,
  ok: 0,
  bad: 0,
};

export const unicafeSlice = createSlice({
  name: "unicafe",
  initialState,
  reducers: {
    getState: (state) => {
      return state;
    },
    setGood: (state, action: PayloadAction<number>) => {
      state.good += action.payload;
    },
    setOk: (state, action: PayloadAction<number>) => {
      state.ok += action.payload;
    },

    setBad: (state, action: PayloadAction<number>) => {
      state.bad += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getState,setGood, setOk, setBad } = unicafeSlice.actions;

export default unicafeSlice.reducer;
