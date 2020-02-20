import React from "react";
import CountryInfo from "./CountryInfo";
import CapitalList from "../Capital/CapitalList";

const Country = () => {
  return (
    <div className="country">
      <CapitalList />
      <CountryInfo />
    </div>
  );
};

export default Country;
