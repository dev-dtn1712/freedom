import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import investor from '../../assets/images/investors.png';
import arrow from '../../assets/icons/arrow.svg';

class Investor extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div className="w-100 position-relative investors">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Investors - Freedome Technologies</title>
          <link rel="canonical" href="https://freedomtechweb.atomic.st.freedomstack.net/investors" />
        </Helmet>
        <div className="grey-section position-absolute" />
        <Row className="w-100">
          <Col md={6} className="d-flex justify-content-center align-items-center px-0 px-md-5">
            <Image className="invetor-pic pl-0 pl-md-5 ml-0 ml-md-5" src={investor} alt='invetor' />
          </Col>
          <Col md={6} className="d-flex justify-content-start align-items-center">
            <div className="pt-0 my-5 my-md-0 px-4 px-md-4 mx-2 mx-md-0">
              <p className="font-mmd pt-0 pt-md-5 mt-0 mt-md-5">
                <span className="pl-4 border-left border-danger border-left-width">
                  Looking to invest?
                </span>
              </p>
              <p className="font-xs investment-desc">
                Want to take on a new business venture that will bring impactful 
                changes to local and international communities?
                Then investing with us is your next step to making a change.
              </p>
              <a
                className="font-xs text-secondary text-center mt-3 mb-0 animation-arrow"
                href="mailto:info@freedomtech.co.za"
              >
                <b className="space-between-arrow">Get in touch</b>
                <Image src={arrow} alt="arrow" className="arrow-left" />
              </a>
            </div>
          </Col>
        </Row>
        <div className="position-absolute dot-image" />
        <div className="my-5 py-5">
          <Row className="px-1 px-md-5 justify-content-center w-100">
            <Col md={8} className="mx-4 mx-md-0">
              <p className="font-mmd">
                <span className="pl-4 border-left border-danger border-left-width">
                  What’s in it for you?
                </span>
              </p>
              <p className="font-xs">
                -	We’re South Africa’s fastest growing insuretech company. <br />
                -	We currently have over 3.5 million customers. <br />
                -	Our product and feature set continually evolves,
                  which means engaged customers. <br />
                -	Optimized landing pages for you and your offer. <br />
                -	Some promotion from our marketing channels,
                  connecting you with our customers. <br />
              </p>
  
              <p className="font-mmd tech-investor mt-5">
                <p className="mb-0">
                  <span className="pl-4 border-left border-danger border-left-width">
                    Becoming a Freedom Technologies Investor is easy and convenient.
                  </span> 
                </p>
              </p>
              <p className="font-xs">
                Contact us to <a href="mailto:invest@freedomtech.co.za" className="font-xs text-secondary"><b>invest@freedomtech.co.za</b></a> to submit
                your personalized investor offer.<br />
                <br />
                We try our best to get you an answer within 48 hours.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Investor;