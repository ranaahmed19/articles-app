import {
  FETCH_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
} from "actions.js";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;
    case ADD_ARTICLE:
      return [...state, action.payload];
    case DELETE_ARTICLE:
      const articles = state.filter((item) => item.id !== action.payload);
      return articles;
    case EDIT_ARTICLE:
      const index = state.findIndex(
        (article) => article.id === action.payload.id
      );
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
}
