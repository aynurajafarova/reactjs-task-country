import React, { Component } from "react";
import { connect } from "react-redux";

import SearchBar from "../SearchBar/SearchBar";
import Spinner from "../Spinner/Spinner";
import Country from "../Country/Country";

class App extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchBar />
        {loading ? <Spinner /> : <Country />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.country.loading
  };
};

export default connect(mapStateToProps)(App);
