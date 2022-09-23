import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import wordsReducer from "./words.reducer";
import postReducer from "./post.reducer";

export default combineReducers({ userReducer, wordsReducer, postReducer });
