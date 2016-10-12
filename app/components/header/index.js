import React, { Component } from 'react';
import { Link } from 'react-router';

import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link className="home-link"
              title="home"
              to="/" >
          <img src="/app/images/logo.svg"
               className="logo"
               height="24"
               width="30"
               alt="Logo" />
          <div className="title">
            Movie DB
          </div>
        </Link>
      </header>
    );
  }
}
