import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchMovie as searchMovieAction } from '../../actions';

import SearchBox from './search-box';

const mapStateToProps = (state) => ({
  searching: state.searchingMovie
});

class SearchBoxContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    searching: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <SearchBox handleQueryChange={this.handleQueryChange}
                 handleSubmit={this.handleSubmit}
                 searching={this.props.searching} />
    );
  }

  handleQueryChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(searchMovieAction(this.state.query));
  }
}

export default connect(mapStateToProps)(SearchBoxContainer);
