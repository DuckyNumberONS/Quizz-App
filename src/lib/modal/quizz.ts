import { Question } from "./question";

export interface Quizz {
    _id: string;
    idUser: string;
    title: string;
    description: string;
    idCollection: string;
    visibility: string;
    keyword: string;
    play: number;
    share: number;
    question:Array<
    updatedAt?: string;
    createdAt?: string;
  }
  