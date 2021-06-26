import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { AppRoute } from '../../const';

import { logout } from '../../store/api-actions';
import { ActionCreator } from '../../store/action';

function UserAuth({ email, avatarUrl, goOut, loadUserInfo }) {
  const handleClick = () => {
    loadUserInfo({});
    goOut();
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

UserAuth.propTypes = {
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  goOut: PropTypes.func.isRequired,
  loadUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user: { email, avatarUrl } }) => ({
  email,
  avatarUrl,
});

const mapDispatchToProps = {
  goOut: logout,
  loadUserInfo: ActionCreator.loadUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
