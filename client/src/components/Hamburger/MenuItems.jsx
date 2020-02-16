import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import MenuItem from './MenuItem';

const MenuItems = ({
  auth: { isAuthenticated, loading },
  logout,
  handleLinkClick,
}) => {
  const authLinks = (
    <>
      <MenuItem delay={`${1 * 0.1}s`} onClick={handleLinkClick} to='/'>
        <i className='fas fa-basketball-ball'></i> Basketball App
      </MenuItem>
      <MenuItem delay={`${2 * 0.1}s`} onClick={handleLinkClick} to='/dashboard'>
        <i className='fas fa-user-friends'></i>{' '}
        <span className='hide-sm'>Dashboard</span>
      </MenuItem>
      <MenuItem delay={`${3 * 0.1}s`} onClick={handleLinkClick} to='/profiles'>
        Profiles
      </MenuItem>
      <MenuItem delay={`${4 * 0.1}s`} onClick={handleLinkClick} to='/posts'>
        Posts
      </MenuItem>
      <MenuItem
        delay={`${5 * 0.1}s`}
        onClick={handleLinkClick}
        regLink={true}
        onClickA={logout}
        hrefL='#!'
      >
        <i className='fas fa-sign-out-alt'></i>{' '}
        <span className='hide-sm'>Logout</span>
      </MenuItem>
    </>
  );

  const guestLinks = (
    <>
      <MenuItem delay={`${1 * 0.1}s`} onClick={handleLinkClick} to='/'>
        <i className='fas fa-basketball-ball'></i> Basketball App
      </MenuItem>
      <MenuItem delay={`${2 * 0.1}s`} onClick={handleLinkClick} to='/profiles'>
        Players
      </MenuItem>
      <MenuItem delay={`${3 * 0.1}s`} onClick={handleLinkClick} to='/register'>
        Register
      </MenuItem>
      <MenuItem delay={`${4 * 0.1}s`} onClick={handleLinkClick} to='/login'>
        Login
      </MenuItem>
    </>
  );

  return <>{!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}</>;
};

MenuItems.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(MenuItems);
