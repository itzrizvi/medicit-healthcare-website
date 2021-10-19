import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import teamOne from '../../Images/team/team1.png';
import teamTwo from '../../Images/team/team2.png';
import teamThree from '../../Images/team/team3.png';
import teamFour from '../../Images/team/team4.png';
import teamFive from '../../Images/team/team5.png';
import teamSix from '../../Images/team/team6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Specialist.css';

const Specialist = () => {
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const twitIcon = <FontAwesomeIcon icon={faTwitter} />
    const pintrstIcon = <FontAwesomeIcon icon={faPinterest} />
    const instaIcon = <FontAwesomeIcon icon={faInstagram} />
    return (
        <>
            <div className="common-banner mb-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>OUR SPECIALIST DOCTORS</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="team-section py-5">
                <Container>
                    <Row>
                        <Col md={4} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src={teamOne} alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Dr. Brook</h3>
                                    <p>Darmatologist</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src={teamTwo} alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Dr. Franks</h3>
                                    <p>Urologist</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src={teamThree} alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Dr. D Sliva</h3>
                                    <p>Nuerologist</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src={teamFour} alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Dr. Lukas</h3>
                                    <p>Pathologist</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src={teamFive} alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Dr. Roach</h3>
                                    <p>Gastrologist</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src={teamSix} alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Dr. Jenia</h3>
                                    <p>Microbiologist</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Specialist;