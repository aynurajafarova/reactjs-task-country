import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import {
  deleteCapital,
  selectedCountry,
  deleteCountryCode
} from "../../actions";

class CapitalListItem extends Component {
  deleteCapitalAndCode = capital => {
    this.props.deleteCapital(capital);
    this.props.codes.map(code => {
      if (capital.alpha3Code === code.alpha3Code) {
        this.props.deleteCountryCode(code);
      }
      return null;
    });
  };

  render() {
    const { countries, selectedCountry } = this.props;

    return (
      <div className="capital-list-item">
        <ul>
          {countries.map((capital, index) => {
            return (
              <li key={index}>
                <span onClick={() => selectedCountry(capital)}>
                  {capital.capital}
                </span>
                <FontAwesomeIcon
                  onClick={() => this.deleteCapitalAndCode(capital)}
                  icon={faTimesCircle}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    codes: state.country.codes
  };
};

export default connect(mapStateToProps, {
  deleteCapital,
  selectedCountry,
  deleteCountryCode
})(CapitalListItem);
