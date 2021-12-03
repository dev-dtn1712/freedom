import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import lifeInsurance from '../../assets/images/LifeInsurance_Products.png';
import arrow from '../../assets/icons/arrow.svg';

class Product extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid pt-5 mt-5 px-0 product">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Products - Freedome Technologies</title>
          <link rel="canonical" href="https://freedomtechweb.atomic.st.freedomstack.net/products" />
        </Helmet>
        <Container>
          <Row className="mx-0 pay-product">
            <Col lg={6} md={7} className="d-flex justify-content-center align-items-center p-0">
              <div className="freedom-pay-img h-100 w-100" />
            </Col>
            <Col lg={6} md={5} className="d-flex justify-content-center flex-column p-0 px-md-2 py-md-5 free-pay-desc">
              <Fragment>
                <p className="border-left-width font-mmd border-left pl-4 border-danger mt-0 mt-md-5 title">FREEDOM PAY</p>
                <p className="font-mmd product-title">Creating a banking experience <br /> that caters to a nation’s needs.</p>
                <p className="font-xs description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique, libero quis viverra lacinia, lacus velit euismod quam, eget consequat ligula lacus sit amet est. In posuere felis sit amet scelerisque eleifend. Ut quis leo sit amet elit ornare porttitor eget tincidunt massa. Vivamus consequat commodo diam in auctor.</p>
                <NavLink className="font-xs text-secondary d-block d-md-none" to="/about">
                  <b className="pr-5">Learn more</b>
                  <Image src={arrow} alt="arrow" className="arrow-left" />
                </NavLink>
              </Fragment>
            </Col>
          </Row>
        </Container>
        <div className="life-insurance text-white py-5 mx-0">
          <Container>
            <Row>
              <Col lg={5} sm={12} className="d-flex flex-column py-3 py-lg-5">
                <div className="life-insurance-description">
                  <p className="border-left-width font-mmd border-left pl-4 border-danger title">LIFE INSUREANCE</p>
                  <p className="font-mmd product-title">Creating a banking experience <br /> that caters to a nation’s needs.</p>
                  <p className="font-xs description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique, libero quis viverra lacinia, lacus velit euismod quam, eget consequat ligula lacus sit amet est. In posuere felis sit amet scelerisque eleifend. Ut quis leo sit amet elit ornare porttitor eget tincidunt massa. Vivamus consequat commodo diam in auctor.</p>
                  <NavLink className="font-xs d-block d-md-none" to="/about">
                    <b className="pr-5">Learn more</b>
                    <Image src={arrow} alt="arrow" className="white-arrow-left" />
                  </NavLink>
                </div>
              </Col>
              <Col lg={7} sm={12} className="life-lifeInsurance-right">
                <div className="life-insurence-image">
                  <Image src={lifeInsurance} className="position-absolute" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Row className="individual-life-insurance mx-0 mt-0 mt-md-5 pt-0 pt-md-5">
          <Col md={6} sm={12} className="d-flex d-md-none justify-content-center flex-column py-5 mt-5 individual-product-description">
            <Fragment>
              <p className="border-left-width font-mmd border-left pl-4 border-danger title">INDIVIDUAL LIFE INSURANCE</p>
              <p className="product-title">Buy individal funeral cover online <br/> for yourself, and your family.</p>
              <p className="font-xs description">Cover yourself, your family, parents, grandparents and extended family members up to 64 years old in South Africa with Freedom Life Individual Funeral Cover, the affordable funeral plan from Freedom Life.</p>
              <NavLink className="font-xs text-secondary d-block d-md-none" to="/about">
                <b className="pr-5">Learn more</b>
                <Image src={arrow} alt="arrow" className="arrow-left" />
              </NavLink>
            </Fragment>
          </Col>
          <Col md={6} sm={12} className="individual-product-image">
            <div className="individual-product w-100 h-100 my-5" />
          </Col>
          <Col md={6} sm={12} className="d-none d-md-flex justify-content-center flex-column py-5 individual-product-description">
            <Fragment>
              <p className="border-left-width font-mmd border-left pl-4 border-danger title">INDIVIDUAL LIFE INSURANCE</p>
              <p className="product-title">Buy individal funeral cover online <br/> for yourself, and your family.</p>
              <p className="font-xs description">Cover yourself, your family, parents, grandparents and extended family members up to 64 years old in South Africa with Freedom Life Individual Funeral Cover, the affordable funeral plan from Freedom Life.</p>
            </Fragment>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Product;