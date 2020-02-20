import React from "react";
import { connect } from "react-redux";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="error-message">
      <h4>{errorMessage}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    errorMessage: state.country.errorMessage
  };
};

export default connect(mapStateToProps)(ErrorMessage);
