import { types } from "../actions/types";

const initialState = {
  searchText: "",
  countryInfo: {},
  loading: false,
  errorMessage: "",
  countries: [],
  codes: []
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
        loading: false,
        // countries:{...state.countries, [action.payload.alpha2Code]: action.payload}
        countries: [...state.countries, action.payload]
      };
    // case types.addCountry:
    // return { countries: [state.countryInfo].push(action.payload) };
    // return { countries: state.countryInfo, ...action.payload };
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
    case types.deleteCapital:
      return {
        ...state,
        countryInfo: {},
        countries: [
          ...state.countries.filter(capital => capital !== action.payload)
        ]
      };
    case types.selectedCountry:
      return { ...state, countryInfo: action.payload };
    case types.fetchCodes:
      return { ...state, codes: [...state.codes, action.payload] };
    case types.deleteCountryCode:
      return {
        ...state,
        codes: [...state.codes.filter(code => code !== action.payload)]
      };
    default:
      return state;
  }
};
