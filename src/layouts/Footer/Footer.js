import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoIcon from '../../assets/images/logo.png';

export default() => {
  return (
    <div className="w-100 footer">
      <Container className="pb-3 pt-4">
        <Row className="px-0">
          <Col md={3}>
            <img className="freedom-logo" src={logoIcon} alt="logo" />
          </Col>
          <Col md={2}>
            <p className="text-white mt-3 font-xs">PRODUCTS</p>
            <ul className="p-0 text-white font-xs">
              <li className="py-1">Family Funeral Cover</li>
              <li className="py-1">Individual Funeral Cover</li>
              <li className="py-1">Freedom Pay</li>
            </ul>
          </Col>
          <Col md={2}>
            <p className="text-white mt-3 font-xs">COMPANY</p>
            <ul className="p-0 text-white font-xs">
              <li className="py-1">
                <NavLink to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/partners">
                  Partners
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/careers">
                  Careers
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/investors">
                  Investors
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <p className="text-white mt-3 font-xs">LEGAL</p>
            <ul className="p-0 text-white font-xs">
              <li className="py-1">FAQ</li>
              <li className="py-1">Disclaimer</li>
              <li className="py-1">Privacy Policy</li>
              <li className="py-1">Terms</li>
            </ul>
          </Col>
          <Col md={3}>
            <p className="text-white mt-3 font-xs d-none d-md-block">Interact with us</p>
            <div className="d-flex justify-content-start align-items-center text-white font-sm py-3 py-md-0">
              <i className="fa fa-facebook-f mr-2" aria-hidden="true" />
              <i className="fa fa-envelope mx-2" aria-hidden="true" />
              <i className="fa fa-phone ml-2" aria-hidden="true" />
            </div>
          </Col>
        </Row>
        <Row className="d-none d-md-block">
          <Col md={12} className="text-white">
            <p className="font-xs">Copyright © Freedom Technologies (Propietary) Limited 2018. All Rights Reserved.</p>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <p className="font-xs text-white pt-3 pt-md-0">Freedom Life Funeral Cover is administered by Freedom Technologies (Proprietary) Limited, registration number 1969/012588/07, an authorised financial services provider (FSP number 47458). The Funeral Policy is underwritten by Old Mutual Alternative Risk Transfer Limited (OMART), a registered long-term insurer (registration number 1997/008994/06)</p>
          </Col>
        </Row>
        <Row className="d-block d-md-none">
          <Col md={12} className="text-white">
            <p className="font-xs">Copyright © Freedom Technologies (Propietary) Limited 2018. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
