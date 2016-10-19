import React, { Component, PropTypes } from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { searchMovies as searchMoviesAction } from '../../actions';

import './search-box.scss';

const mapStateToProps = (state) => ({
  searching: state.loading
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
    const { query } = this.props;

    this.setState({ query: query });
    this._searchMovies(query);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.query !== nextProps.query) {
      const { query } = nextProps;

      this.setState({ query: query });
      this._searchMovies(query);
    }
  }

  handleQueryChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this._searchMovies(this.state.query);
  }

  _searchMovies(query) {
    if(!isEmpty(query)) {
      this.props.dispatch(searchMoviesAction(query));
    }
  }
}

export default connect(mapStateToProps)(SearchBox);
