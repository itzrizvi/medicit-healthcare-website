import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const addIcon = <FontAwesomeIcon icon={faMapMarker} />
    const envIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phnIcon = <FontAwesomeIcon icon={faPhone} />
    return (
        <>
            <footer className='foot'>
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>About us</h2>
                            </div>
                            <div className="foot-detail-1">
                                <p>Medicit Health Care acquired permission to start a Nursing College in 2011.
                                    Since 2012 United College of Nursing has been functioning with students
                                    studying in 4 year Basic BSc course in Nursing.</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Quick links</h2>
                            </div>
                            <Navbar variant="light" className="responsive-fix">
                                <Nav className="d-block foot-nav-menu">
                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/specialist">Our Specialist</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Our services</h2>
                            </div>
                            <ul className="foot-detail-3">
                                <li>Dental Care</li>
                                <li>Darmatology Solution</li>
                                <li>Pathology Lab</li>
                                <li>Neurology Solution</li>
                                <li>Urology Solution</li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Contact info</h2>
                            </div>
                            <ul className="foot-detail-4">
                                <li>{addIcon} Medicit st new york ny 10004 United states</li>
                                <li>{envIcon} info@medicit.com</li>
                                <li>{phnIcon} +123 - 765 - 7645</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;