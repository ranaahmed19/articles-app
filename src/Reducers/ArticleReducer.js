import { FETCH_ARTICLE } from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLE:
      return action.payload;
    default:
      return state;
  }
}
