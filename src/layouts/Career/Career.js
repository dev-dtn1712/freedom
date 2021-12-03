import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import dotImage from '../../assets/images/dots.png';
import careerImage from '../../assets/images/careers.png';
import arrow from '../../assets/icons/arrow.svg';
import JOBS from '../../utils/variables';

class Career extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderJobs = job => {
    const {
      match: { url },
    } = this.props;

    return (
      <Row key={job.id} className="w-100">
        <Col lg={5} md={8} sm={12}>
          <Row className="pt-0 mt-3 pt-md-5 mt-md-5 w-100">
            <Col lg={8} md={6} sm={12} xs={12} className="d-flex">
              <div className="split-job-line border-top border-secondary mt-3" />
              <p className="pl-3 ml-0 ml-md-5 job-title">
                <span className="font-sm">{job.number}</span>
              </p>
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <p className="font-sm job-title ml-3 ml-md-0">{job.title}</p>
              <div className="pl-3 border-left border-danger border-left-width ml-3 ml-md-0 mb-3 mb-md-0">
                <p className="mb-1 font-xs font-weight-bold">
                  {job.type}
                </p>
                <p className="mb-1 font-xs">
                  {job.location}
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} md={4} sm={12}>
          <div className="pt-0 pt-md-5 mt-0 mt-md-5 ml-3 ml-md-0">
            <p className="font-xs short-desc">
              {job.shortDescription}
            </p>
            <NavLink
              className="font-xs text-secondary animation-arrow"
              to={`${url}/${job.id}`}
            >
              <b className="space-between-arrow">{job.readMore}</b>
              <Image src={arrow} alt="arrow" className="arrow-left" />
            </NavLink>
          </div>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div className="container-fluid pt-5 mt-5 career px-0 position-relative">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Careers - Freedome Technologies</title>
          <link rel="canonical" href="https://freedomtechweb.atomic.st.freedomstack.net/careers" />
        </Helmet>
        <Image src={dotImage} alt="dot-images" className="position-absolute dot-image d-none d-lg-block" />
        <p className="w-100 text-center font-mmd py-5 mt-4 mb-5">Careers at Freedom Technologies</p>
        <div className="w-100">
          <Image src={careerImage} alt="career-image" className="w-100" />
        </div>
        <div className="mb-2 my-md-5 pb-4 w-100">
          {JOBS.map(this.renderJobs)}
        </div>
      </div>
    ); 
  }
};

export default Career;