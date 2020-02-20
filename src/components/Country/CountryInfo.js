import React, { Component } from "react";
import { connect } from "react-redux";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

class CountryInfo extends Component {
  render() {
    const { country, errorMessage } = this.props;

    let countryLenght = Object.keys(country).length;
    let errorMessageLength = errorMessage.length;

    const countryBody = (
      <div className="country-info">
        <div className="country-content">
          <div className="country-flag">
            <img src={country.flag} alt="flag" />
          </div>
          <div className="country-details">
            <h4>{country.altSpelling}</h4>
            <p className="region">{country.region}</p>
            <p>Population: {country.population}</p>
            <p>Currency: {country.currency}</p>
          </div>
        </div>
      </div>
    );

    if (countryLenght > 0) {
      return <React.Fragment>{countryBody}</React.Fragment>;
    } else if (errorMessageLength > 0) {
      return <ErrorMessage />;
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    country: state.country.countryInfo,
    errorMessage: state.country.errorMessage
  };
};

export default connect(mapStateToProps)(CountryInfo);
