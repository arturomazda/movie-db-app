import React, { Component, PropTypes } from 'react';

import './movie-details.scss';

export default class MovieDetails extends Component {
  static propTypes = {
    movie: PropTypes.objct
  };

  render() {
    const movie = this.props.movie;

    return (
      <div className="movie-details">
        <img alt={`${movie.title} movie poster`}
             className="image"
             src={movie.image} />
        <div className="details">
          <h1 className="title">
            {movie.title}
          </h1>
          {(movie.released) ? <p className="released">Released: {movie.released}</p> : null}
          {(movie.description) ? <p className="description">{movie.description}</p> : null}
        </div>
      </div>
    );
  }
}
