import { createSlice } from "@reduxjs/toolkit";

interface PropsDataQuestionsResults {
  rightAnswer: boolean;
  time: number;
  point: number;
}

const questionsResults = createSlice({
  name: "questionsResults",
  initialState: [] as PropsDataQuestionsResults[],
  reducers: {
    setQuestionsResult: (state, action) => {
      state.push(action.payload);
    },
    clearquestionsResults: () => {
      return [];
    },
  },
});

export const { setQuestionsResult, clearquestionsResults } =
  questionsResults.actions;

const questionsResultsReducer = questionsResults.reducer;
export default questionsResultsReducer;
