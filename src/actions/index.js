import { types } from "./types";
import { response } from "../api/restCountries";

export const searchCapital = capital => dispatch => {
  dispatch({
    type: types.searchCapital,
    payload: capital
  });
};

export const fetchCountry = capital => async dispatch => {
  const res = await response(capital)
    .then(response => {
      console.log("res" + response);

      const responseData = {
        flag: response.data[0].flag,
        altSpelling: response.data[0].altSpellings[1],
        region: response.data[0].region,
        population: response.data[0].population,
        currency: response.data[0].currencies[0].code
      };

      dispatch({
        type: types.fetchCountry,
        payload: responseData
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

export const setLoading = () => {
  return {
    type: types.setLoading
  };
};

export const addCapital = capital => {
  return {
    type: types.addCapital,
    payload: capital
  };
};

export const deleteCapital = capital => {
  return {
    type: types.deleteCapital,
    payload: capital
  };
};
