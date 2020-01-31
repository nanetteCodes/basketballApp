import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li>
          <span>
            © {new Date().getFullYear()} BasktballApp all rights reserved
          </span>
        </li>
        <li>
          <Link to='/privacy'>Privacy Policy</Link>
        </li>
        <li>
          <Link to='/terms-of-service'>Terms of Service</Link>
        </li>
        <li>
          <span>Made in Los Angeles</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
