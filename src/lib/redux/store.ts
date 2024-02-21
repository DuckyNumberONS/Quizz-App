// store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userReducer from "./user/userReducer";
import tokenReducer from "./user/tokenReducer";
import anwsersReducer from "./user/anwsersReducer";
import questionsReducer from "./user/questionsReducer";
import questionsResultsReducer from "./user/questionResultsReducer";
import indexQuestionsReducer from "./user/indexQuestion";

const tokenPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["token"],
  keyPrefix: "",
};

const rootReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  anwsers: anwsersReducer,
  question: questionsReducer,
  questionResults: questionsResultsReducer,
  indexQuestions: indexQuestionsReducer,
});

const persistedReducer = persistReducer(tokenPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

export const persistor = persistStore(store);
