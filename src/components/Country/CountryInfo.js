import React, { Component } from "react";
import { connect } from "react-redux";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { fetchCode } from "../../actions";

class CountryInfo extends Component {
  componentDidMount() {
    if (this.props.country.capital) {
      this.props.fetchCode(this.props.country.alpha3Code);
    } else {
      return null;
    }
  }

  render() {
    const { country, errorMessage, codes } = this.props;
    let countryLenght = Object.keys(country).length;
    let errorMessageLength = errorMessage.length;

    const countryBody = countryLenght ? (
      <div className="country-info">
        <div className="country-content">
          <div className="country-flag">
            <img src={country.flag} alt="flag" />
          </div>
          <div className="country-details">
            <h4>{country.altSpellings[1]}</h4>
            <p className="region">{country.region}</p>
            <p>Population: {country.population}</p>
            <p>Currency: {country.currencies[0].code}</p>
          </div>
          <div className="neighbors">
            <span>Neighbors: </span>
            {codes.map((code, index) => {
              if (code.alpha3Code === country.alpha3Code) {
                return <span key={index}>{code.borders.join(", ")}</span>;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    ) : null;

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
    errorMessage: state.country.errorMessage,
    codes: state.country.codes
  };
};

export default connect(mapStateToProps, { fetchCode })(CountryInfo);
