import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import intensiveImg from '../../../Images/intesiveUnit.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './IntensiveUnit.css';

const IntensiveUnit = () => {
    // Font Awesome ICONS
    const phonIcon = <FontAwesomeIcon icon={faPhone} />
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <>
            {/* Intensive Care Area */}
            <div className="intensive-care-section">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="intensive-care-img">
                                <img src={intensiveImg} className='img-fluid' alt="ICUIMG" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="intensive-care-details text-start">
                                <h2><span style={{ color: ' #7dd6f6' }}>Intensive</span> and <span style={{ color: ' #7dd6f6' }}>Emergency</span> Care Unit</h2>
                                <p>We have 24/7 ICU and CCU services and have at least 32 beds for ICU patients,
                                    Including ICU ambulance call service. We always pickup our emergency patients.
                                </p>
                            </div>
                            <div className="emergency-contact text-start">
                                <div className="emergency-one d-flex">
                                    <div className="em-icon-1">
                                        {phonIcon}
                                    </div>
                                    <div className="em-details-1">
                                        <h4>Direct Call</h4>
                                        <p>+123 - 765-7645</p>
                                    </div>
                                </div>
                                <div className="emergency-two d-flex">
                                    <div className="em-icon-2">
                                        {mailIcon}
                                    </div>
                                    <div className="em-details-2">
                                        <h4>Mail Us</h4>
                                        <p>info@medicit.com</p>
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

export default IntensiveUnit;