import axios from "axios";

export const response = async capital => {
  return await axios.get(`https://restcountries.eu/rest/v2/capital/${capital}`);
};
