import { SWITCH_WORD } from "../actions/post.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_WORD:
      return action.payload;
    default:
      return state;
  }
}
