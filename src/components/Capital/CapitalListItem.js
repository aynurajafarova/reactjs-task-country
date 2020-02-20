import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { deleteCapital, fetchCountry } from "../../actions";

class CapitalListItem extends Component {
  render() {
    const { capitals, deleteCapital } = this.props;
    return (
      <div className="capital-list-item">
        <ul>
          {capitals.map((capital, index) => {
            return (
              <li key={index}>
                <span
                  onClick={() => {
                    this.props.fetchCountry(capital);
                  }}
                >
                  {capital}
                </span>
                <FontAwesomeIcon
                  onClick={() => deleteCapital(capital)}
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
    capitals: state.capitals
  };
};

export default connect(mapStateToProps, { deleteCapital, fetchCountry })(
  CapitalListItem
);
