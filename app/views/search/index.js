import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { searchMovies as searchMoviesAction } from '../../actions';
import MoviesList from '../../components/movies-list';
import SearchBox from '../../components/search-box';

import './search-view.scss';

const mapStateToProps = (state) => ({
  query: state.query
});

class SearchView extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    params: PropTypes.object,
    query: PropTypes.string
  }

  render() {
    return (
      <div className="search-view">
        <SearchBox/>
        <MoviesList/>
      </div>
    );
  }

  componentWillMount() {
    this._searchMovie(this.props.params.query);
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    const nextQuery = nextProps.query;
    const urlQuery = this.props.params.query;
    const nextUrlQuery  = nextProps.params.query;

    if(query === nextQuery && urlQuery !== nextUrlQuery) {
      this._searchMovie(nextUrlQuery);
    }
  }

  _searchMovie(query) {
    if(!isEmpty(query)) {
      this.props.dispatch(searchMoviesAction(query));
    }
  }
}

export default connect(mapStateToProps)(SearchView);
