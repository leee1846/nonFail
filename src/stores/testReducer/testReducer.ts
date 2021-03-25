import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialStateType = {
  value: number;
};

const initialState: InitialStateType = {
  value: 2,
};

export const testReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increaseDouble: (state, { payload }: PayloadAction<InitialStateType>) => {
      state.value *= payload.value;
    },
  },
});

export const { increase, decrease, increaseDouble } = testReducer.actions;
export default testReducer.reducer;
