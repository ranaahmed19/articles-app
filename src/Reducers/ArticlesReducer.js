import { FETCH_ARTICLES, ADD_ARTICLE } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;
    case ADD_ARTICLE:
      const lastId = state.length || 0;
      action.payload["id"] = (lastId + 1).toString();
      return [...state, action.payload];
    default:
      return state;
  }
}
