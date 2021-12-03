import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import arrow from '../../assets/icons/arrow.svg';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid pt-5 mt-5 px-0 about">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Us - Freedome Technologies</title>
          <link rel="canonical" href="https://freedomtechweb.atomic.st.freedomstack.net/about" />
        </Helmet>
        <div className="d-flex justify-content-center align-items-center my-5 header">
          <p className="font-sm text-center px-4 px-md-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique,
            libero quis viverra lacinia, lacus velit euismod quam,
            eget consequat ligula lacus sit amet est.
          </p>
        </div>
        <Row className="w-100 m-0">
          <div className="first-parallelogram" />
          <div className="second-parallelogram" />
          <Col md={7} className="p-0">
            <div className="w-100">
              <div className="about-left" />
            </div>
            <Row className="pt-5 mt-5 d-none d-md-flex">
              <Col md={5}>
                <div className="w-100 border-bottom border-dark pt-3" />
              </Col>
              <Col md={7}>
                <p className="font-sm px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean tristique,
                  libero quis viverra lacinia, lacus velit euismod quam,
                  eget consequat ligula lacus sit amet est.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="p-0 mt-5 mt-md-0">
            <div className="dot-image" />
            <div className="w-100 about-section-right">
              <div className="about-right" />
              <div className="about-right-image" />
            </div>
          </Col>
        </Row>
        <Row className="d-flex d-md-none w-100">
          <Col xs={3}>
            <div className="w-100 border-bottom border-dark pt-3" />
          </Col>
          <Col xs={9}>
            <p className="font-sm pr-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique,
              libero quis viverra lacinia, lacus velit euismod quam,
              eget consequat ligula lacus sit amet est.
            </p>
          </Col>
        </Row>
        <div className="w-100 talk-section mt-5 py-5 text-center">
          <p className="font-sm w-100 join-team">JOIN OUR TEAM</p>
          <p className="font-xs w-100">Join us we build something great.</p>
          <NavLink className="font-xs text-secondary animation-arrow" to="/careers">
            <b className="space-between-arrow">Learn more</b>
            <Image src={arrow} alt="arrow" className="arrow-left" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default About;