import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import contactImage from '../../assets/images/Contact.png';
import dotImage from '../../assets/images/dots.png';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid pt-5 px-0 mt-5 contact position-relative">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact - Freedome Technologies</title>
          <link rel="canonical" href="https://freedomtechweb.atomic.st.freedomstack.net/contact" />
        </Helmet>
        <Image src={dotImage} alt="dot-image" className="dot-images"/>
        <Image src={dotImage} alt="dot-image" className="dot-images-second"/>
        <Row className="w-100 my-0 my-md-5 position-relative mx-0">
          <Col lg={6} md={6} className="px-0 px-md-2">
            <div className="grey-section" />
          </Col>
          <Col lg={6} md={6} className="px-0 px-md-2 pt-5 mt-5 pt-lg-0 mt-lg-0">
            <div className="contact-info pb-0 pb-md-5 mb-0 mb-md-5 pl-3 pl-md-5">
              <h3 className="font-mmd pl-3 border-left border-danger border-left-width">
                Let&apos;s talk
              </h3>
              <p className="font-xs pl-0 pl-md-3 pt-3 pb-4">
                Do you have a question, a project?
                <br/>
                We would love to help you, contact us!
              </p>
              <div className="pl-0 pl-md-3">
                <p className="font-xs m-0">
                  General Inquiries
                </p>
                <p className="font-xs">
                  <a href="mailto:info@modesens.com" className="text-secondary">
                    hello@freedomtech.co.za
                  </a>
                </p>
                <p className="font-xs m-0">Office Contact Number</p>
                <p className="font-xs">+27 (0) 21 286 2270</p>
                <h3 className="font-mmd pt-5">Where to find us</h3>
                <p className="font-xs pt-3">
                  Freedom Technologies (Pty) Ltd <br/>
                  Zeezicht Building, Tygerberg Office Park, <br/>
                  163 Uys Krige Drive, <br/>
                  Plattekloof, <br/>
                  Cape Town, <br/>
                  South Africa
                </p>
                <h3 className="font-mmd pt-5 pb-3">Follow us on</h3>
                <i className="fa fa-facebook-f mr-2 facebook font-sm" aria-hidden="true" />
              </div>
            </div>
          </Col>
          <Image src={contactImage} alt="contact-image" className="contact-image" />
        </Row>
      </div>
    );
  }
}

export default Contact;