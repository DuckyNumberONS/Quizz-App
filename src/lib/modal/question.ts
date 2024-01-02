export interface Anwsers {
  number: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  _id: string;
  title;
  imgQuestion;
  time;
  point;
  updatedAt?: string;
  createdAt?: string;
}
