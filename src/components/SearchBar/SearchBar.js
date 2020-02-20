import React, { Component } from "react";

import { connect } from "react-redux";
import {
  searchCapital,
  fetchCountry,
  setLoading,
  addCapital
} from "../../actions";

class SearchBar extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchCountry(this.props.searchText);
    this.props.setLoading();

    if (this.props.searchText.length > 0) {
      this.props.addCapital(this.props.searchText);
    }
  };

  onChange = e => {
    this.props.searchCapital(e.target.value);
  };

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.onSubmit}>
          <input
            className="search-input"
            type="text"
            onChange={this.onChange}
            placeholder="Capital"
            value={this.props.searchText}
          />
          <button className="btn-search">Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchText: state.country.searchText
  };
};

export default connect(mapStateToProps, {
  searchCapital,
  fetchCountry,
  setLoading,
  addCapital
})(SearchBar);
