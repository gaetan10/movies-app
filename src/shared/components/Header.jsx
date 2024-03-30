import React from 'react';
import { NavLink, Link } from 'react-router-dom/';

import './header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">Cinoche</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>MOVIES</NavLink>
          </li>
          <li>
            <NavLink to="/new" exact>ADD</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
