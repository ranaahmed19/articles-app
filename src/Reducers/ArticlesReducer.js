import { FETCH_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;
    case ADD_ARTICLE:
      const lastId = state.length || 0;
      action.payload["id"] = (lastId + 1).toString();
      return [...state, action.payload];
    case DELETE_ARTICLE:
      const articles = state.filter((item) => item.id !== action.payload);
      return articles;
    default:
      return state;
  }
}
