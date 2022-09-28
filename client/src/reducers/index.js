import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import wordsReducer from "./words.reducer";
import postReducer from "./post.reducer";
import quizzReducer from "./quizz.reducer";

export default combineReducers({ userReducer, wordsReducer, postReducer, quizzReducer });
