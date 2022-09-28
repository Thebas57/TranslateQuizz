import {
    GET_QUIZZ
  } from '../actions/quizz.actions';
  
  const initialState = {};
  
  export default function quizzReducer(state = initialState, action) {
    switch (action.type) {
      case GET_QUIZZ:
        return action.payload;
      default:
        return state;
    }
  }
  