import React, { Component, PropTypes } from 'react';
import { lowerCase } from 'lodash';

import SearchBox from '../../components/search-box';
import MoviesList from '../../components/movies-list';

import './search-view.scss';

export default class SearchView extends Component {
  static propTypes = {
    params: PropTypes.object
  }

  render() {
    return (
      <div className="search-view">
        <SearchBox query={lowerCase(this.props.params.query)}/>
        <MoviesList/>
      </div>
    );
  }
}
