import React from 'react';
import { NavLink } from 'react-router-dom';

import { AppRoute } from '../../const';

function PageHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink
              className="header__logo-link"
              to={AppRoute.MAIN}
              isActive={(match, { pathname }) =>
                !match ? false : pathname === AppRoute.MAIN
              }
              activeClassName="header__logo-link--active"
              activeStyle={{
                cursor: 'default',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </NavLink>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <NavLink
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.SIGN_IN}
                  isActive={(match, { pathname }) =>
                    !match ? false : pathname === AppRoute.SIGN_IN
                  }
                  activeStyle={{
                    cursor: 'default',
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__login">Sign in</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;

// activeClassName="header__logo-link--active"