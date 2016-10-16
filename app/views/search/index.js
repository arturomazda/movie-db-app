import React, { Component } from 'react';

import SearchBox from '../../components/search-box';
import MoviesList from '../../components/movies-list';

import './search-view.scss';

export default class SearchView extends Component {
  render() {
    return (
      <div className="search-view">
        <SearchBox/>
        <MoviesList/>
      </div>
    );
  }
}
