import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import ReactHtmlParser from 'react-html-parser';
import careerImage from '../../assets/images/career-details.png';
import dotImage from '../../assets/images/dots.png';
import JOBS from '../../utils/variables';
import getJob from '../../utils/services';

class CareerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: null,
    };
  }

  componentDidMount() {
    const {
      match: { params : { id } },
    } = this.props;
    const job = getJob(JOBS, id);
    this.setState({ job });
    window.scrollTo(0, 0);
  }

  render() {
    const { job } = this.state;
    if (!job) {
      return (
        <Container className="py-5 my-5">
          <Spinner animation="grow" />
        </Container>
      );
    }

    return (
      <div className="container-fluid pt-5 mt-5 mb-5 pb-0 pb-md-5 career-details px-0 position-relative">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Career - Freedome Technologies</title>
          <link rel="canonical" href="https://freedomtechweb.atomic.st.freedomstack.net/careers" />
        </Helmet>
        <div className="start-job-line border-top border-secondary mt-5 d-none d-lg-block" />
        <Image src={dotImage} alt='dot-image' className="dots-image d-none d-lg-block" />
        <Container>
          <Row>
            <Col lg={2}>
              <div className="pl-3 border-left border-danger border-left-width ml-3 ml-md-0 mb-3 mb-md-0 d-none d-md-block">
                <p className="mb-1 font-xs font-weight-bold">
                  {job.type}
                </p>
                <p className="mb-1 font-xs">
                  {job.location}
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <h3>{job.title}</h3>
              <div className="pl-3 border-left border-danger border-left-width my-3 d-block d-md-none">
                <p className="mb-1 font-xs font-weight-bold">
                  {job.type}
                </p>
                <p className="m-0 font-xs">
                  {job.location}
                </p>
              </div>
              <p className="font-xs font-weight-bold mt-4 mb-5 mobile-text-view">{job.shortDescription}</p>
              <h4 className="font-sm d-none d-md-block">About Freedom Technologies</h4>
              <h3 className="d-block d-md-none mobile-title-view">About Freedom <br/> Technologies</h3>
              <p className="font-xs pt-3 mobile-text-view">
                {ReactHtmlParser(job.technology)}
              </p>
              <h4 className="font-sm">Your Skills</h4>
              <p className="font-xs pt-3 mobile-text-view">
                {ReactHtmlParser(job.skills)}
              </p>
              <h4 className="font-sm pt-5">The Work</h4>
              <p className="font-xs pt-3 mobile-text-view">
                {ReactHtmlParser(job.works)}
              </p>
              <h4 className="font-sm pt-5">Your Personality</h4>
              <p className="font-xs pt-3 mobile-text-view">
                {ReactHtmlParser(job.personal)}
              </p>
              <h4 className="font-sm pt-5">Benefits and Perks</h4>
              <p className="font-xs pt-3 mobile-text-view">
                {ReactHtmlParser(job.benefits)}
              </p>
              <h3 className="pt-5 text-center">Interested?</h3>
              <p className="pt-3 font-xs mobile-text-view">Send us a message at jobs@freedomtech.co.za with your résumé, portfolio of relevant work and anything else you wish us to see and consider.</p> 
            </Col>
          </Row>
        </Container>
        <Image src={careerImage} className="position-absolute grey-section" alt="career-image" />
      </div>
    );
  }
};

export default CareerDetails;