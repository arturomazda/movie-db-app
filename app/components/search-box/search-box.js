import React, { Component, PropTypes } from 'react';

import './search-box.scss';

export default class SearchBox extends Component {
  static propTypes = {
    handleQueryChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    searching: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.handleQueryChange = this.props.handleQueryChange.bind(this);
    this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="search-box" onSubmit={this.handleSubmit}>
        <input placeholder="type what you are searching for"
               onChange={this.handleQueryChange}
               disabled={this.props.searching}
               type="text" />
        <button disabled={this.props.searching}
                onClick={this.handleSubmit} >
          Search
        </button>
      </form>
    );
  }
}
