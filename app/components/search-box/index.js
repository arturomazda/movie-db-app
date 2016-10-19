import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { kebabCase } from 'lodash';

import { searchMovies as searchMoviesAction } from '../../actions';

import './search-box.scss';

const mapStateToProps = (state) => ({
  searching: state.loading,
  query: state.query
});

class SearchBox extends Component {
  static propTypes = {
    searching: PropTypes.bool,
    dispatch: PropTypes.func,
    query: PropTypes.string
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
               value={this.state.query}
               maxLength="30"
               minLength="1"
               type="text" />
        <button disabled={this.props.searching}
                onClick={this.handleSubmit} >
          Search
        </button>
      </form>
    );
  }

  componentWillMount() {
    this.setState({ query: this.props.query });
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.query !== nextProps.query) {
      this.setState({ query: nextProps.query });
    }
  }

  handleQueryChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    const { query } = this.state;

    event.preventDefault();
    browserHistory.push('/search/' + kebabCase(query));
    this.props.dispatch(searchMoviesAction(query));
  }
}

export default connect(mapStateToProps)(SearchBox);
