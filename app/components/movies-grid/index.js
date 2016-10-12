import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import MoviesGrid from './movies-grid';
import Movie from '../movie';
import Message from '../message';
import Spinner from '../spinner';
import {
  generateRandomHexColor,
  randomNumber
} from '../../common/utils.js';

const mapStateToProps = (state) => ({
  searching: state.searchingMovie,
  error: state.searchingMovieError,
  movies: state.searchingMovieResponse.results || [],
  moviesTotal: state.searchingMovieResponse.total_results,
});

class MoviesGridContainer extends Component {
  static propTypes = {
    searching: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool,PropTypes.object]),
    movies: PropTypes.array,
    moviesTotal: PropTypes.number
  }

  render() {
    return (
      <MoviesGrid>
        {this._renderSpinner()}
        {this._renderMovies()}
        {this._renderNothingFound()}
      </MoviesGrid>
    );
  }

  _renderSpinner() {
    if(this.props.searching) {
      return (
        <Spinner/>
      );
    }

    return null;
  }

  _renderNothingFound() {
    if(!this.props.searching && this.props.moviesTotal === 0) {
      return (
        <Message text="We can't find movie"/>
      );
    }

    return null;
  }

  _renderMovies() {
    if(!this.props.searching && this.props.movies.length > 0) {
      const renderedMovies = this.props.movies.map((movie, index) => {
        const style = {
          animationDuration: `${randomNumber(250, 500)}ms`,
          backgroundColor: generateRandomHexColor()
        };

        return (
          <li className="movies-list-item"
              key={`movie-${index}`} >
            <Link to={`/movie/${movie.id}`}
                  title={movie.title} >
              <Movie description={movie.description}
                     image={movie.image}
                     title={movie.title}
                     style={style} />
            </Link>
          </li>
        );
      });

      return (
        <ul className="movies-list">
          {renderedMovies}
        </ul>
      );
    }

    return null;
  }
}

export default connect(mapStateToProps)(MoviesGridContainer);
