import {
    GET_WORDS
} from '../actions/words.actions';

const initialState = {};

export default function wordsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORDS:
      return action.payload;
    default:
      return state;
  }
}
