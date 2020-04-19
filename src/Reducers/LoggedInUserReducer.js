import { LOGIN, SIGNUP } from "actions.js";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case SIGNUP:
      return action.payload;
    default:
      return state;
  }
}
