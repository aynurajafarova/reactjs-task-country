import { combineReducers } from "redux";

import countryReducer from "./countryReducer";
import capitalReducer from "./capitalReducer";

export default combineReducers({
  country: countryReducer,
  capitals: capitalReducer
});
