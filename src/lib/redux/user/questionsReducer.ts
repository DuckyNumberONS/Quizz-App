import { createSlice } from "@reduxjs/toolkit";

interface PropsDataAnwser {
  isCorrect: boolean;
  text: string;
  number: number;
}

interface PropsDataQuestion {
  _id: string;
  idUser: string;
  urlThumbnail: string;
  title: string;
  description: string;
  idCollection: string;
  visibility: string;
  keyword: string;
  play?: number;
  share?: number;
  question: Array<PropsDataAnwser>;
}

const questionsSlice = createSlice({
  name: "anwsers",
  initialState: [] as PropsDataQuestion[],
  reducers: {
    setQuestion: (state, action) => {
      state.push(action.payload);
    },
    clearQuestions: () => {
      return [];
    },
  },
});

export const { setQuestion, clearQuestions } = questionsSlice.actions;

const questionsReducer = questionsSlice.reducer;
export default questionsReducer;
