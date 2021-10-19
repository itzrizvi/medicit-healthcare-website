import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookMedical, faDiagnoses, faVials, faUserMd } from '@fortawesome/free-solid-svg-icons';
import whyPeopleImg from '../../Images/about/whychooseus.jpg';
import './About.css';

const About = () => {
    const medicalICon = <FontAwesomeIcon icon={faBookMedical} />
    const diagnosICon = <FontAwesomeIcon icon={faDiagnoses} />
    const labICon = <FontAwesomeIcon icon={faVials} />
    const doctorICon = <FontAwesomeIcon icon={faUserMd} />
    return (
        <>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>ABOUT US</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='my-5'>
                <Row>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-1">
                                {medicalICon}
                            </div>
                            <div className="feature-details">
                                <h2>Medical Reasearch</h2>
                                <p>Medicit is one of the renowned medical institution for medical research and health care all in world.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-2">
                                {diagnosICon}
                            </div>
                            <div className="feature-details">
                                <h2>Diagnostics Services</h2>
                                <p>All kind of diagnostics are here for you, we are open 24/7 you can always get our help and stay safe.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-1">
                                {labICon}
                            </div>
                            <div className="feature-details">
                                <h2>Hi-technology Labs</h2>
                                <p>Most expensive hi-tech labs are created here for safety and trush of our patients and relief also.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-2">
                                {doctorICon}
                            </div>
                            <div className="feature-details">
                                <h2>Specialized Doctors</h2>
                                <p>Most experienced specialized doctors are here for you they are very much dedicated to all patients.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="why-people-choose-us-setion">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="why-people-choose-img">
                                <img src={whyPeopleImg} className='img-fluid' alt="WHYPEOPLECHOOSEUS" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="why-people-choose-details">
                                <div className="why-people-detail text-start">
                                    <h2>Why people choose us</h2>
                                    <p>We are the best of the best, recently we have been on a free medication seminar
                                        and we got a huge response and also a survey from our beloved clients.
                                    </p>
                                </div>
                            </div>
                            <Col md={12} sm={12} xs={12}>

                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;