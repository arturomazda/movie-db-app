import React, { Component, PropTypes } from 'react';

import MovieDetails from '../../components/movie-details';

import './movie-view.scss';

export default class MovieView extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="movie-view">
        <MovieDetails movieId={this.props.params.movieId}/>
      </div>
    );
  }
}
