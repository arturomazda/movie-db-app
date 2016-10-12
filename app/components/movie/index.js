import React, { Component, PropTypes } from 'react';

import './movie.scss';

export default class Movie extends Component {
  static propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    return (
      <div className="movie" style={this.props.style}>
        <div className="container">
          <img className="image" src={this.props.image}/>
          <div className="wrapper">
            <h2 className="title">{this.props.title}</h2>
            {(this.props.description) ? <p className="description">{this.props.description}</p> : false}
          </div>
        </div>
      </div>
    );
  }
}
