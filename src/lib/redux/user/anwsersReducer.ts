import { createSlice } from "@reduxjs/toolkit";

interface PropsDataAnwser {
  isCorrect: boolean;
  text: string;
  number: number;
}

const anwsersSlice = createSlice({
  name: "anwsers",
  initialState: [] as PropsDataAnwser[],
  reducers: {
    setAnwser: (state, action) => {
      const existingIndex = state.findIndex(
        (anwser) => anwser.number === action.payload.number
      );
      if (existingIndex !== -1) {
        state[existingIndex] = action.payload;
      } else {
        state.push(action.payload);
      }
    },
    clearAnwsers: () => {
      return [];
    },
  },
});

export const { setAnwser, clearAnwsers } = anwsersSlice.actions;

const anwsersReducer = anwsersSlice.reducer;
export default anwsersReducer;
