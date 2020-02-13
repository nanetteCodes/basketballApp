import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import baller from '../../img/baller.png';

import './Landing.scss';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='landing-1'>
        <div className='landing-1_img'>
          <img src={baller} alt='baller' />
        </div>
        <h1 className='landing-1_title'>
          Find Courts <br /> Meet Teammates
        </h1>
        <p className='landing-1_p'>
          The basketball app is your resource to find high qualtiy and safe
          pickup games in your area.
        </p>
        <Link to='/register' className='btn landing-1_btn-signup'>
          Sign Up
        </Link>
        <Link to='/login' className='link landing-1_link-login'>
          Login
        </Link>
      </div>
      <div className='landing-2'>
        <i className='fas fa-user-alt'></i>{' '}
        <h2 className='landing-title medium'>Sync up with your teammates</h2>
        <p className='landing-p'>
          Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum
          primis in faucibus orci luctus et.
        </p>
        <i className='fas fa-basketball-ball'></i>{' '}
        <h2 className='landing-title medium'>Instantly Find a Court</h2>
        <p className='landing-p'>
          Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum
          primis in faucibus orci luctus et.
        </p>
        <i className='fas fa-basketball-ball'></i>{' '}
        <h2 className='landing-title medium'>
          Avoid the Typical Pickup Game Hastle
        </h2>
        <p className='landing-p'>
          Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum
          primis in faucibus orci luctus et.
        </p>
      </div>
      <div className='landing-3'>
        <h1 className='x-large'>Find a court anywhere in your city.</h1>
        <p className='landing-p'>
          All of our courts get a net safty rating and a description so that you
          will know that the court you are going to is a safe place to play
        </p>
        <Link to='/register' className='btn btn-landing'>
          Sign Up
        </Link>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
