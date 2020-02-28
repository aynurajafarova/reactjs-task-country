import { types } from "./types";
import { response } from "../api/restCountries";
import { countryCodeResp } from "../api/countryCode";

export const searchCapital = capital => dispatch => {
  dispatch({
    type: types.searchCapital,
    payload: capital
  });
};

export const fetchCountry = capital => async dispatch => {
  const res = await response(capital)
    .then(response => {
      // console.log(response);
      dispatch({
        type: types.fetchCountry,
        payload: response.data[0]
      });
    })
    .catch(error => {
      dispatch({
        type: types.handleError,
        payload: "no results found..."
      });
      return error;
    });
  return res;
};

export const fetchCode = code => async dispatch => {
  const res = await countryCodeResp(code).then(response => {
    console.log(response);
    dispatch({
      type: types.fetchCodes,
      payload: response.data
    });
  });
  return res;
};

export const setLoading = () => {
  return {
    type: types.setLoading
  };
};

export const deleteCapital = capital => {
  return {
    type: types.deleteCapital,
    payload: capital
  };
};

// export const addCountry = country => {
//   return {
//     type: types.addCountry,
//     payload: country
//   };
// };

export const selectedCountry = country => {
  return {
    type: types.selectedCountry,
    payload: country
  };
};

export const deleteCountryCode = code => {
  return {
    type: types.deleteCountryCode,
    payload: code
  };
};
