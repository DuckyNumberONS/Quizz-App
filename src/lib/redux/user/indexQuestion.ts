import { createSlice } from "@reduxjs/toolkit";

interface PropsData {
  indexQuestion: number;
  maxLengthIndex: number;
}
const indexQuestions = createSlice({
  name: "indexQuestion",
  initialState: {
    indexQuestion: 0,
    maxLengthIndex: 1,
  } as PropsData,
  reducers: {
    setIndexQuestion: (state, action) => {
      state.indexQuestion = action.payload.indexQuestion;
      state.maxLengthIndex = action.payload.maxLengthIndex;
    },
    // ... (other reducers)
  },
});

export const { setIndexQuestion } = indexQuestions.actions;

const indexQuestionsReducer = indexQuestions.reducer;
export default indexQuestionsReducer;
