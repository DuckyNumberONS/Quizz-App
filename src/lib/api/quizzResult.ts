import axios from "../../utils/index";
import { Question } from "../modal/question";
import { QuizzResult } from "../modal/quizzResult";
// import { Quizz, QuizzPost } from "../modal/quizz";

export const getItemQuizzResult = async (id: string | string[]) => {
  try {
    const response = await axios.get(`/quizzResult/getItemQuizzResult/${id}`);
    const quizz = response.data;
    return quizz;
  } catch (error) {
    console.error(error);
  }
};

export const getItemQuizzResultByUser = async (id: string | string[]) => {
  try {
    const response = await axios.get(
      `/quizzResult/getItemQuizzResultByUser/${id}`
    );
    const quizz = response.data;
    return quizz;
  } catch (error) {
    console.error(error);
  }
};

export const getItemQuizzResultByQuizz = async (id: string | string[]) => {
  try {
    const response = await axios.get(
      `/quizzResult/getItemQuizzResultByQuizz/${id}`
    );
    const quizz = response.data;
    return quizz;
  } catch (error) {
    console.error(error);
  }
};

export const postQuizzResult = async (data: QuizzResult) => {
  try {
    const response = await axios.post("/quizzResult/createQuizzResult", data);
    const quizz = response.data;
    return quizz;
  } catch (error) {
    console.error(error);
  }
};

export const updateItemQuizzResult = async (data: QuizzResult, id: string) => {
  try {
    const response = await axios.put(
      `/quizzResult/updateQuizzResult/${id}`,
      data
    );
    const quizz = response.data;
    return quizz;
  } catch (error) {
    console.error(error);
  }
};

export const deleteQuizz = async (id: string) => {
  try {
    const response = await axios.delete(`/quizz/deleteQuizz/${id}`);
    const quizz = response.data;
    return quizz;
  } catch (error) {
    console.error(error);
  }
};
