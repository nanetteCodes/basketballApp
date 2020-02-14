import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import baller from '../../img/baller.png';
import losAngeles from '../../img/los-angeles.png';
import ball from '../../img/icon-bball.png';
import hoop from '../../img/icon-hoop.png';
import people from '../../img/icon-people.png';

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
        <img className='landing-2_icon--people' src={people} alt='people' />{' '}
        <h2 className='landing-2_title'>Sync up with your teammates</h2>
        <p className='landing-2_p'>
          Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum
          primis in faucibus orci luctus et.
        </p>
        <img className='landing-2_icon--ball' src={ball} alt='basketball' />{' '}
        <h2 className='landing-2_title'>Instantly Find a Court</h2>
        <p className='landing-2_p'>
          Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum
          primis in faucibus orci luctus et.
        </p>
        <img
          className='landing-2_icon--hoop'
          src={hoop}
          alt='basketball hoop'
        />{' '}
        <h2 className='landing-2_title'>
          Avoid the Typical Pickup Game Hastle
        </h2>
        <p className='landing-2_p'>
          Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum
          primis in faucibus orci luctus et.
        </p>
      </div>
      <div className='landing-3'>
        <img className='landing-3_img' src={losAngeles} alt='los angeles' />{' '}
        <h1 className='landing-3_title'>Find a court anywhere in your city.</h1>
        <p className='landing-3_p'>
          All of our courts get a net safty rating and a description so that you
          will know that the court you are going to is a safe place to play
        </p>
        <Link to='/register' className='btn landing-3_btn-signup'>
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
