import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchMovie as searchMovieAction } from '../../actions';

import './search-box.scss';

const mapStateToProps = (state) => ({
  searching: state.loading
});

class SearchBox extends Component {
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
      <form className="search-box" onSubmit={this.handleSubmit}>
        <input placeholder="Type movie title to search"
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

  handleQueryChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(searchMovieAction(this.state.query));
  }
}

export default connect(mapStateToProps)(SearchBox);
