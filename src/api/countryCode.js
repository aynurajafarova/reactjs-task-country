import axios from "axios";

export const countryCodeResp = async code => {
  return await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
};
