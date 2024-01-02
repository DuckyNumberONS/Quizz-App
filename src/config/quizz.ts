const collection = [
  {
    idCollection: 12312, //required
    title: "Games", //required
    description: "dsaddasdas", //required
    imgThumbnail: "urlasdsadsadasdas", //required
  },
];

const question1 = {
  id: 1, //required
  title: "What is the meaning of life?", //required
  imgQuuestion: "urlsadasadasdasdsas", //required
  time: 10, //required
  point: 50, //required
  anwsers: [
    {
      number: 1, //required
      text: "42", //required
      isCorrect: false, //required
    },
    {
      number: 2, //required
      text: "42", //required
      isCorrect: true, //required
    },
    {
      number: 3, //required
      text: "42", //required
      isCorrect: false, //required
    },
    {
      number: 4, //required
      text: "42", //required
      isCorrect: false, //required
    },
  ],
};

const question2 = {
  id: 2,
  title: "What is the meaning of life?",
  imgQuuestion: "urlsadasadasdasdsas",
  time: 10,
  point: 50,
  anwsers: [
    {
      number: 1,
      text: "42",
      isCorrect: false,
    },
    {
      number: 2,
      text: "42",
      isCorrect: false,
    },
    {
      number: 3,
      text: "42",
      isCorrect: false,
    },
    {
      number: 4,
      text: "42",
      isCorrect: true,
    },
  ],
};

const Quizz = [
  {
    idQuizz: 2221, //required
    idUser: 2323323, //required
    urlThumbnail: "", //required
    title: "Get the questions right and win!", //required
    description:
      "On the way that i set off with the desire to create something.I foind myself in the field of design.", //required
    idCollection: 12312, //required
    //theme:"red"
    visibility: "private", //2 option:"private and public"---default:"public" required
    keyword: "#game #lerning #play ", //required
    play: 0, //initial = 0
    share: 0, //initial = 0
    question: [question1, question2], //required
  },
];

const QuizzResults = [
  {
    id: 111111, //required
    idUser: 2323323, //required
    idQuizz: 2221, //required
    rightAnswer: 10, //initial = 0
    completionTime: "1:00:00", //initial = 0
    totalPoints: 2000, //initial = 0
  },
];
