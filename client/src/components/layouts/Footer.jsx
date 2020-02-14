import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li>
          <span className='footer_text'>
            © {new Date().getFullYear()} BasktballApp all rights reserved
          </span>
        </li>
        <li>
          <Link className='footer_text' to='/privacy'>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link className='footer_text' to='/terms-of-service'>
            Terms of Service
          </Link>
        </li>
        <li>
          <span className='footer_text'>Made in Los Angeles</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
