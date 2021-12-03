import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import debounce from 'lodash/debounce';
import { NavLink, withRouter } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import cx from 'classnames';
import whiteLogoIcon from '../../assets/images/logo.png';
import burgerIcon from '../../assets/images/menuPng.png';
import closeIcon from '../../assets/images/closePng.png';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: ['/', '/partners'],
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.handleScroll, 16));
  }

  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    if (scrollPositionY > 100) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  renderNavbar = () => {
    const { location: { pathname } } = this.props;
    const { routes, isScrolled } = this.state;

    return (
      <Navbar.Collapse id="basic-navbar-nav" className="h-100 desktop-navbar">
        <Nav className="ml-auto h-100 d-flex justify-content-center align-items-center">
          <NavLink exact to="/" className={cx('mx-4 font-xs d-flex justify-content-center align-items-center h-100', { 'text-secondary topbar-item': routes.indexOf(pathname) === -1 }, { 'navbar-text-color': isScrolled })}>
            Home
          </NavLink>
          <NavLink to="/about" className={cx('mx-4 font-xs d-flex justify-content-center align-items-center h-100', { 'text-secondary topbar-item': routes.indexOf(pathname) === -1 }, { 'navbar-text-color': isScrolled })}>
            About
          </NavLink>
          <NavLink to="/products" className={cx('mx-4 font-xs d-flex justify-content-center align-items-center h-100', { 'text-secondary topbar-item': routes.indexOf(pathname) === -1 }, { 'navbar-text-color': isScrolled })}>
            Products
          </NavLink>
          <NavLink to="/partners" className={cx('mx-4 font-xs d-flex justify-content-center align-items-center h-100', { 'text-secondary topbar-item': routes.indexOf(pathname) === -1 }, { 'navbar-text-color': isScrolled })}>
            Partners
          </NavLink>
          <NavLink to="/careers" className={cx('mx-4 font-xs d-flex justify-content-center align-items-center h-100', { 'text-secondary topbar-item': routes.indexOf(pathname) === -1 }, { 'navbar-text-color': isScrolled })}>
            Careers
          </NavLink>
          <NavLink to="/investors" className={cx('mx-4 font-xs d-flex justify-content-center align-items-center h-100', { 'text-secondary topbar-item': routes.indexOf(pathname) === -1 }, { 'navbar-text-color': isScrolled })}>
            Investors
          </NavLink>
          <NavLink to="/contact" className='btn btn-danger rounded-0 mx-4 font-xs d-flex justify-content-center align-items-center h-100'>
            <p className="m-0">Contact</p>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    );
  }

  renderMobileNavbar = () => {
    const { location: { pathname } } = this.props;
    const { routes, isScrolled } = this.state;

    return (
      <Menu
        right
        isOpen={false}
        customBurgerIcon={
          routes.indexOf(pathname) === -1
            ? <Image src={burgerIcon} alt="menu" className={cx('mobile-burger', { 'mobile-white-burger' : isScrolled })}/>
            : <Image src={burgerIcon} alt="menu" className="mobile-white-burger"/>
        }
        customCrossIcon={<Image src={closeIcon} alt="close" className="close-white-icon" />}
        className="mobile-navbar"
        width={240}
      >
        <a href="/" className="font-xs my-4">
          Home
        </a>
        <a href="/about" className="font-xs my-4">
          About
        </a>
        <a href="/products" className="font-xs my-4">
          Products
        </a>
        <a href="/partners" className="font-xs my-4">
          Partners
        </a>
        <a href="/careers" className="font-xs my-4">
          Careers
        </a>
        <a href="/investors" className="font-xs my-4">
          Investors
        </a>
        <a href="/contact" className="font-xs my-4">
          Contact
        </a>
        <div className="social-icons d-flex justify-content-around">
          <div className="rounded-circle socials mr-2">
            <i className="fa fa-facebook-f text-white font-mmd fb-icon" aria-hidden="true" />
          </div>
          <div className="rounded-circle socials mx-2">
            <i className="fa fa-envelope text-white font-mmd envolp-icon" aria-hidden="true" />
          </div>
          <div className="rounded-circle socials ml-2">
            <i className="fa fa-phone text-white font-mmd phone-icon" aria-hidden="true" />
          </div>
        </div>
      </Menu>
    );
  }

  render() {
    const { location: { pathname } } = this.props;
    const { routes, isScrolled } = this.state;

    return (
      <Navbar fixed="top" className={cx('topbar', { 'scrolled-navbar': isScrolled })} expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-flex justify-content-center align-items-center">
            { routes.indexOf(pathname) > -1
              ? <Image className="d-inline-block align-top freedom-logo" src={whiteLogoIcon} alt="logo" />
              : <Image className="d-inline-block align-top freedom-black-logo" src={whiteLogoIcon} alt="logo" />
            }
          </Navbar.Brand>
          <div className="d-block d-lg-none">
            {this.renderMobileNavbar()}
          </div>

          {this.renderNavbar()}
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(Topbar);
