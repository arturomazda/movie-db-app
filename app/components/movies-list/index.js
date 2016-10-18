import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { debounce } from 'lodash';
import { searchMoreMovies as searchMoreMoviesAction } from '../../actions';

import Movie from '../movie';

import {
  generateRandomHexColor,
  randomNumber
} from '../../common/utils.js';

import './movies-list.scss';

const mapStateToProps = (state) => ({
  totalPages: state.movies.total_pages || 1,
  currentPage: state.movies.page || 1,
  movies: state.movies.results || [],
  query: state.query || ''
});

class MoviesList extends Component {
  static propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    dispatch: PropTypes.func,
    movies: PropTypes.array,
    query: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.debouncedScroll = debounce(this._handleScroll, 250).bind(this);
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

  componentDidMount() {
    window.addEventListener('scroll', this.debouncedScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedScroll);
  }

  _renderMovies() {
    return this.props.movies.map((movie, index) => {
      const style = { backgroundColor: generateRandomHexColor() };

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

  _handleScroll(event) {
    const scrollPosition = window.scrollY + document.documentElement.clientHeight;
    const halfContentHeight = document.body.offsetHeight / 2;
    const { currentPage, totalPages, query } = this.props;

    if(scrollPosition >= halfContentHeight && currentPage < totalPages) {
      this.props.dispatch(searchMoreMoviesAction(query, currentPage + 1));
    }
  }
}

export default connect(mapStateToProps)(MoviesList);
