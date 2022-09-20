import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import wordsReducer from "./words.reducer";

export default combineReducers({ userReducer, wordsReducer });
