import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMovie as getMovieAction } from '../../actions';

import MovieDetails from './movie-details';
import Spinner from '../spinner';

const mapStateToProps = (state) => ({
  loading: state.getMovie,
  error: state.getMovieError,
  movie: state.getMovieResponse || {},
  dispatch: PropTypes.func
});

class MovieDetailsContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    movieId: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    movie: PropTypes.object
  }

  render() {
    if(this.props.loading) {
      return (
        <Spinner/>
      );
    }

    return (
      this._renderMovieDetails()
    );
  }

  componentWillMount() {
    this._getMovieData();
  }

  _renderMovieDetails() {
    if(this.props.movie) {
      return (
        <MovieDetails movie={this.props.movie}/>
      );
    }

    return null;
  }

  _getMovieData() {
    this.props.dispatch(getMovieAction(this.props.movieId));
  }
}

export default connect(mapStateToProps)(MovieDetailsContainer);
