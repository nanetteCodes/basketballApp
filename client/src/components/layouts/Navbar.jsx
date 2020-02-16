import React, { Component } from 'react';
import Menu from '../Hamburger/Menu';
import MenuButton from '../Hamburger/MenuButton';
import MenuItems from '../Hamburger/MenuItems';
import './Navbar.scss';

export default class Navbar extends Component {
  state = {
    menuOpen: false,
  };

  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const styles = {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '99',
        opacity: 0.9,
        display: 'flex',
        alignItems: 'center',
        background: 'black',
        width: '100%',
        color: 'white',
        fontFamily: 'Lobster',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        filter: this.state.menuOpen ? 'blur(2px)' : null,
        transition: 'filter 0.5s ease',
      },
    };

    return (
      <div>
        <div style={styles.container}>
          <MenuButton
            open={this.state.menuOpen}
            onClick={this.handleMenuClick}
            color='white'
          />
        </div>
        <Menu open={this.state.menuOpen}>
          {/* <div>Logo</div> */}
          <MenuItems handleLinkClick={this.handleLinkClick} />
        </Menu>
      </div>
    );
  }
}
