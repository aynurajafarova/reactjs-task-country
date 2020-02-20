import { types } from "../actions/types";

const initialState = {
  searchText: "",
  countryInfo: {},
  loading: false,
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.searchCapital:
      return { ...state, searchText: action.payload, loading: false };
    case types.fetchCountry:
      return {
        ...state,
        searchText: "",
        countryInfo: action.payload,
        errorMessage: "",
        loading: false
      };
    case types.handleError:
      return {
        ...state,
        searchText: "",
        errorMessage: action.payload,
        countryInfo: {},
        loading: false
      };
    case types.setLoading:
      return { ...state, loading: true };
    default:
      return state;
  }
};
