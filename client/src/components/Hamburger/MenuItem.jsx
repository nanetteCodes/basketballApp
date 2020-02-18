import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: '1s appear forwards',
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: '1.2rem',
        padding: '1rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        color: this.state.hover ? 'gray' : '#3d3d3d',
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        animationDelay: this.props.delay,
      },
      menuLink: {
        color: this.state.hover ? 'gray' : '#3d3d3d',
        textDecoration: 'none',
      },
      line: {
        width: '90%',
        height: '1px',
        background: 'gray',
        margin: '0 auto',
        animation: '0.5s shrink forwards',
        animationDelay: this.props.delay,
      },
    };
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          onClick={this.props.onClick}
          className={this.props.className}
        >
          {this.props.regLink ? (
            <a
              style={styles.menuLink}
              onClick={this.props.onClickA}
              href={this.props.hrefL}
            >
              {this.props.children}
            </a>
          ) : (
            <Link style={styles.menuLink} to={this.props.to}>
              {this.props.children}
            </Link>
          )}
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

MenuItem.propTypes = {
  delay: PropTypes.string.isRequired,
  handleHover: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  onClickA: PropTypes.func,
  hrefL: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
};
