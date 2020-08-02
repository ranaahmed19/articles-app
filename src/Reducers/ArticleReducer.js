import { FETCH_ARTICLE } from "actions.js";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLE:
      if (action.payload == null) return state;
      else return action.payload;
    default:
      return state;
  }
}
