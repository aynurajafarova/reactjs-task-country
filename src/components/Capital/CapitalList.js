import React from "react";
import CapitalListItem from "./CapitalListItem";
import { connect } from "react-redux";

const CapitalList = ({ countries }) => {
  if (countries.length > 0) {
    return (
      <div className="capital-list">
        <CapitalListItem countries={countries} />
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    countries: state.country.countries
  };
};

export default connect(mapStateToProps)(CapitalList);
