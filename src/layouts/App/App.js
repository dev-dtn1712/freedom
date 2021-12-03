import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import debounce from 'lodash/debounce';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cx from 'classnames';
import helloPhone from '../../assets/images/hello_phone_home.png';
import mobileHelloPhone from '../../assets/images/helloPhone_dots.png';
import productsImage from '../../assets/images/FTech_ProductsSection.png';
import partner from '../../assets/images/partners_home.png';
import checker from '../../assets/images/checkers.png';
import shoprite from '../../assets/images/Shoprite.png';
import swissre from '../../assets/images/SwissRe.png';
import arrow from '../../assets/icons/arrow.svg';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHero: true,
      isAbout: false,
      isProduct: false,
      isPartner: false,
      isWhiteSection: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', debounce(this.scrollEvent, 64));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.scrollEvent, 64));
  }

  scrollEvent = () => {
    const scrollPositionY = +window.scrollY;
    if (document.getElementById('about')
      && document.getElementById('product')
      && document.getElementById('partner')) {
      const aboutSectionTop = document.getElementById('about').offsetTop - 100;
      const productSectionTop = document.getElementById('product').offsetTop - 400;
      const partnerSectionTop = document.getElementById('partner').offsetTop - 300;

      if (scrollPositionY > -100 && scrollPositionY < aboutSectionTop) {
        this.setState({ 
          isHero: true,
          isWhiteSection: false,
          isAbout: false,
          isProduct: false,
          isPartner: false,
        });
      } else if (scrollPositionY > aboutSectionTop
        && scrollPositionY < productSectionTop) {
        this.setState({
          isAbout: true,
          isWhiteSection: true,
          isHero: false,
          isProduct: false,
          isPartner: false,
        });
      } else if (scrollPositionY > productSectionTop 
      && scrollPositionY < partnerSectionTop) {
        this.setState({
          isProduct: true,
          isWhiteSection: false,
          isHero: false,
          isAbout: false,
          isPartner: false,
        });
      } else if (scrollPositionY > partnerSectionTop) {
        this.setState({
          isPartner: true,
          isWhiteSection: true,
          isHero: false,
          isAbout: false,
          isProduct: false,
        });
      }
    }
  }

  render() {
    const { isAbout, isProduct, isPartner, isHero, isWhiteSection } = this.state;

    return (
      <div className="w-100">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Freedome Technologies</title>
          <link rel="canonical" href="https://freedomtechweb.atomic.st.freedomstack.net" />
        </Helmet>
        <div className="w-100 homepage" id="hero">
          <div className="first-parallelogram" />
          <div className="second-parallelogram" />
          <div className={cx('position-fixed d-flex line-dots justify-content-between align-items-centers', { 'white-dot-section': isWhiteSection })}>
            <div className="top-line" />
            <div className="dots d-flex justify-content-start align-items-centers">
              <a href="/#hero"><div className={cx('dot mx-3', { 'current-section-marker': isHero })} /></a>
              <a href="#about"><div className={cx('dot mx-3', { 'current-section-marker': isAbout })} /></a>
              <a href="#product"><div className={cx('dot mx-3', { 'current-section-marker': isProduct })} /></a>
              <a href="#partner"><div className={cx('dot mx-3', { 'current-section-marker': isPartner })} /></a>
            </div>
            <div className="bottom-line" />
          </div>
          <Container className="pt-5">
            <Row className="pt-5 mt-5 mt-md-0">
              <Col md={6} sm={12} className="pt-5 mt-5">
                <p className="pt-5 mt-5 text-white">
                  Creating Solutions that helps <br />
                  you take care of the most <br />
                  important things in life<br />
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="position-absolute dot-image d-none d-md-block" />
        <div className="d-block d-md-flex justify-content-start align-items-center my-5 py-0 py-md-5 about-section position-relative" id="about">
          <div className="about-section-part">
            <div className="grey-background" />
            <div className="position-absolute hello-phone">
              <Image src={helloPhone} alt="hello-phone" className="d-none d-sm-block" />
              <Image src={mobileHelloPhone} alt="mobile-phone" className="d-block d-sm-none" />
            </div>
          </div>
          <div className="about-section-part ml-0 ml-md-5 mt-5 mt-md-0">
            <Container>
              <Row>
                <Col md={8}>
                  <p className="font-sm letter-space">02</p>
                  <p className="border-left-width font-sm border-left pl-4 border-danger letter-space">ABOUT</p>
                  <p className="font-sm">Some content about how we are awesome and we like creating awesome stuff.</p>
                  <p className="font-xs description text-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tristique, libero quis viverra lacinia, lacus velit 
                    euismod quam, eget consequat ligula lacus sit amet est.
                    In posuere felis sit amet scelerisque eleifend.
                    Ut quis leo sit amet elit ornare porttitor eget tincidunt massa.
                    Vivamus consequat commodo diam in auctor.</p>
                  <NavLink className="font-xs text-secondary animation-arrow" to="/about">
                    <b className="space-between-arrow">Learn more</b>
                    <Image src={arrow} alt="arrow" className="arrow-left" />
                  </NavLink>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="w-100 product-section text-white">
          <Container>
            <Row>
              <Col md={6} className="py-0 py-md-5 mt-5 mb-0 mb-md-5" id="product">
                <p className="font-sm letter-space">03</p>
                <p className="border-left-width font-sm letter-space border-left pl-4 mt-4 border-danger">
                  PRODUCTS
                </p>
                <p className="font-xs w-75 mt-5 text-uppercase sub-letter-space">
                  INTRODUCING EXCITING PRODUCTS TO THE WORLD
                </p>
                <p className="font-xs description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean tristique, libero quis viverra lacinia, 
                  lacus velit euismod quam, eget consequat ligula lacus sit amet est. 
                  In posuere felis sit amet scelerisque eleifend. 
                  Ut quis leo sit amet elit ornare porttitor eget tincidunt massa. 
                  Vivamus consequat commodo diam in auctor.
                </p>
                <NavLink className="font-xs text-white animation-arrow" to="/products">
                  <b className="space-between-arrow">Learn more</b>
                  <Image src={arrow} alt="arrow-left" className="white-arrow-left text-white" />
                </NavLink>
              </Col>
              <Col md={6} className="px-0 pt-0 mt-5 mb-0 mb-md-5">
                <Image src={productsImage} alt="products-image" className="w-100"/>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="w-100 partner-section position-relative" id="partner">
          <div className="gradient position-absolute" />
          <div className="position-absolute dot-image d-md-block d-none" />
          <Container>
            <Row className="my-5">
              <Col md={6} className="px-0 pt-0 pt-md-5 d-flex justify-content-center align-items-center position-relative">
                <div className="w-100 pt-5 mt-5">
                  <Image src={partner} alt="freedom-pay" className="w-100 p-0 p-md-5" />
                </div>
              </Col>
              <Col md={6} className="py-4 p-md-5">
                <p className="font-sm letter-space">04</p>
                <p className="border-left-width font-sm letter-space border-left pl-4 mt-4 border-danger">PARTNERS</p>
                <p className="font-sm w-100 mt-5 text-uppercase">Freedom Technologies partners with leading financial and retail providers.</p>
                <p className="font-xs w-100 parter-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean tristique, libero quis viverra lacinia, 
                  lacus velit euismod quam, eget consequat ligula lacus sit amet est. 
                  In posuere felis sit amet scelerisque eleifend. 
                  Ut quis leo sit amet elit ornare porttitor eget tincidunt massa. 
                  Vivamus consequat commodo diam in auctor.
                </p>
                <NavLink className="font-xs text-secondary animation-arrow" to="/partners">
                  <b className="space-between-arrow">Become a partner</b>
                  <Image src={arrow} alt="arrow-left" className="arrow-left" />
                </NavLink>
                <Row className="pt-5">
                  <div className="d-flex justify-content-start align-items-center ml-3">
                    <div className="w-25 h-100 d-flex justify-content-center align-items-center">
                      <Image src={shoprite} className="w-100" alt="shoprite" />
                    </div>
                    <div className="ml-5 w-25 h-100 d-flex justify-content-center align-items-center">
                      <Image src={swissre} className="w-100" alt="swissre" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center ml-3">
                    <div className="mt-3 w-25 h-100 d-flex justify-content-center align-items-center">
                      <Image src={checker} className="w-100" alt="checker" />
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default HomePage;