import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

import './register.scss';

const Register = ({ setAlert, register, isAuthenticated }) => {
  // hooks
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  // same as doing
  // state={
  //   formData: {
  //     name: '',
  //     email: ''
  //     ...
  //   }
  // }

  const { name, email, password, password2 } = formData;
  // same as formData.name ...

  // ..formData makes a copy of form data
  // e.target.name is taking hte name attr from the input and assigning it to its value
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/signup-two' />;
  }
  return (
    <Fragment>
      <h1 className='register_title'>
        Start Balling <br /> Today
      </h1>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Enter Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Enter Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          {/* <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small> */}
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input
          type='submit'
          className='btn register_btn --submit'
          value='Submit'
        />
        <span className='register_btn--or'>or</span>
        <input
          type='submit'
          className='btn register_btn --facebook'
          value='Sign Up With Facebook'
        />
        <input
          type='submit'
          className='btn register_btn --google'
          value='Sign Up With Google'
        />
      </form>
      <p className='register_login'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
