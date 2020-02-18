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
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        color: '#3d3d3d',
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
            color='#3d3d3d'
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
