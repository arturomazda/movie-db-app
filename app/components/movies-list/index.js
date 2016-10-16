import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Movie from '../movie';

import {
  generateRandomHexColor,
  randomNumber
} from '../../common/utils.js';

import './movies-list.scss';

const mapStateToProps = (state) => ({
  movies: state.searchingMovieResponse.results || [],
  moviesTotal: state.searchingMovieResponse.total_results,
});

class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array,
    moviesTotal: PropTypes.number
  }

  render() {
    if(this.props.movies.length > 0) {
      return (
        <ul className="movies-list">
          {this._renderMovies()}
        </ul>
      );
    }

    return null;
  }

  _renderMovies() {
    return this.props.movies.map((movie, index) => {
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
  }
}

export default connect(mapStateToProps)(MoviesList);
