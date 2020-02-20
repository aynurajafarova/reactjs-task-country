import { types } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case types.addCapital:
      return [...state, action.payload];
    case types.deleteCapital:
      return state.filter(capital => capital !== action.payload);
    default:
      return state;
  }
};
