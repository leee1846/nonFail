import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialStateProps = {
  value: number;
};

const initialState: InitialStateProps = {
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
    increaseDouble: (state, { payload }: PayloadAction<InitialStateProps>) => {
      state.value *= payload.value;
    },
  },
});

export const { increase, decrease, increaseDouble } = testReducer.actions;
export default testReducer.reducer;
