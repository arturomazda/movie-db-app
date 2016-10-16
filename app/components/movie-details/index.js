import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { getMovie as getMovieAction } from '../../actions';

import './movie-details.scss';

const mapStateToProps = (state) => ({
  movie: state.movie || {},
  dispatch: PropTypes.func
});

class MovieDetails extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    movieId: PropTypes.string,
    movie: PropTypes.object
  }

  render() {
    const movie = get(this.props, 'movie');

    if(Object.keys(movie).length) {
      return (
        <div className="movie-details">
          <div className="image-container">
            <img alt={`${movie.title} movie poster`}
                 className="image"
                 src={movie.image} />
          </div>
          <div className="details-container">
            <h1 className="title">
              {movie.title}
            </h1>
            {(movie.released) ? <p className="released">Released: {movie.released}</p> : null}
            {(movie.description) ? <p className="description">{movie.description}</p> : null}
          </div>
        </div>
      );
    }

    return null;
  }

  componentWillMount() {
    this._getMovieData();
  }

  _getMovieData() {
    this.props.dispatch(getMovieAction(this.props.movieId));
  }
}

export default connect(mapStateToProps)(MovieDetails);
