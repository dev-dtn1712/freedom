import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import arrow from '../../assets/icons/arrow.svg';
import checker from '../../assets/images/checkers.png';
import shoprite from '../../assets/images/Shoprite.png';
import swissre from '../../assets/images/SwissRe.png';

class Partner extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="w-100">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Partners - Freedome Technologies</title>
          <link rel="canonical" href="https://freedomtechweb.atomic.st.freedomstack.net/partners" />
        </Helmet>
        <div className="w-100 partner d-flex justify-content-center align-items-center text-white font-md">
          <Container>
            <Row>
              <Col md={6} className="mx-2 mx-md-0 mt-5 mt-md-0">
                <p className="mt-5 pt-5 mt-md-0 pt-md-0 pr-3 pr-md-0">Some content about how we are awesome and we like creating awesome stuff.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="py-5 my-0 mt-md-5">
          <Row className="pt-0 pt-md-5 mt-0 mt-md-5 d-md-none">
            <Col md={6} className="px-4">
              <div className="pl-4 border-left-width border-left border-danger shop-markers">
                <Image src={swissre} alt="shoprite" className="w-100" />
              </div>
              <p className="pt-3 font-xs shop-markers-desc">The Swiss Re Group is one of the world’s leading providers of reinsurance, insurance and other forms of insurance-based risk transfer, working to make the world more resilient. It anticipates and manages risk – from natural catastrophes to climate change, from ageing populations to cyber crime. The aim of the Swiss Re Group is to enable society to thrive and progress, creating new opportunities and solutions for its clients.</p>
              <div className="pb-4 d-none">
                <p className="font-xs">Learn More</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="px-4">
              <div className="pl-4 py-2 border-left-width border-left border-danger shop-markers">
                <Image src={shoprite} alt="shoprite" className="w-100" />
              </div>
              <p className="pt-3 font-xs shop-markers-desc">Shoprite made a promise of lower prices over 40 years ago. More than just words, this promise has formed the very foundation of our business and has helped us grow into Africa’s largest food retailer.</p>
              <div className="pb-4 d-none">
                <p className="font-xs font-weight-bold">Learn More</p>
              </div>
            </Col>
            <Col md={6} className="px-4">
              <div className="pl-4 py-2 border-left-width border-left border-danger shop-markers">
                <Image src={checker} alt="shoprite" className="w-100" />
              </div>
              <p className="pt-3 font-xs shop-markers-desc">At Checkers and Checkers Hyper, they believe that you can have the lifestyle you want, and they&apos;re constantly doing their best to show you how. Backed by the biggest food retail group in Africa, they&apos;re able to consistently offer you savings on all your much-needed grocery items.</p>
              <div className="pb-4 d-none">
                <p className="font-xs font-weight-bold">Learn More</p>
              </div>
            </Col>
          </Row>
          <Row className="pt-0 pt-md-5 mt-0 mt-md-5 d-md-flex d-none">
            <Col md={6} className="px-4">
              <div className="pl-4 border-left-width border-left border-danger shop-markers py-2">
                <Image src={swissre} alt="shoprite" className="w-100" />
              </div>
              <p className="pt-4 font-xs shop-markers-desc">The Swiss Re Group is one of the world’s leading providers of reinsurance, insurance and other forms of insurance-based risk transfer, working to make the world more resilient. It anticipates and manages risk – from natural catastrophes to climate change, from ageing populations to cyber crime. The aim of the Swiss Re Group is to enable society to thrive and progress, creating new opportunities and solutions for its clients.</p>
              <div className="pb-4 d-none">
                <p className="font-xs font-weight-bold">Learn More</p>
              </div>
            </Col>
            <Col md={6} className="px-4">
              <div className="mt-5 dot-image" />
            </Col>
          </Row>
        </Container>
        <div className="w-100 d-flex justify-content-center align-items-center py-5 talk-section flex-column">
          <p className="font-sm text-secondary m-0 text-center px-3 px-md-0">We’d love to tell you more about what we’re doing here at Freedom Technologies.</p>
          <NavLink
            className="font-xs text-secondary text-center mt-3 mb-0 animation-arrow"
            to='/contact'
          >
            <b className="space-between-arrow">Let&apos;s talk</b>
            <Image src={arrow} alt="arrow" className="arrow-left" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Partner;