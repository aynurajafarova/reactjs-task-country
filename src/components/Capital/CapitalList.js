import React from "react";
import CapitalListItem from "./CapitalListItem";
import { connect } from "react-redux";

const CapitalList = ({ capitals }) => {
  if (capitals.length > 0) {
    return (
      <div className="capital-list">
        <CapitalListItem />
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    capitals: state.capitals
  };
};

export default connect(mapStateToProps)(CapitalList);
