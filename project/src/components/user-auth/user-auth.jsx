import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { AppRoute } from '../../const';

import { logout } from '../../store/api-actions';

import { getUser } from '../../store/user-data/selectors';

function UserAuth() {
  const dispatch = useDispatch();

  const { avatarUrl, email } = useSelector(getUser);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <li className="header__nav-item user">
        <NavLink
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.FAVORITES}
          isActive={(match, { pathname }) =>
            match && pathname === AppRoute.FAVORITES}
          activeStyle={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img style={{ borderRadius: '50%' }} src={avatarUrl} alt={'user'} />
          </div>
          <span className="header__user-name user__name">{email}</span>
        </NavLink>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.MAIN}>
          <span className="header__signout" onClick={handleClick}>
            Sign out
          </span>
        </Link>
      </li>
    </>
  );
}

export default UserAuth;
