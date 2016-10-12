import React, { Component } from 'react';

import SearchBox from '../../components/search-box';
import MoviesGrid from '../../components/movies-grid';

import './search-view.scss';

export default class SearchView extends Component {
  render() {
    return (
      <div className="search-view">
        <SearchBox/>
        <MoviesGrid/>
      </div>
    );
  }
}
