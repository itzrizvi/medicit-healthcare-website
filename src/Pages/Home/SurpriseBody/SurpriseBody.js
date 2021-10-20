import React from 'react';
import './SurpriseBody.css';
import surPriseImg from '../../../Images/surpriseyourbody.png';
import ratingShape from '../../../Images/ratingShape.png';
import { Col, Container, Row } from 'react-bootstrap';

const SurpriseBody = () => {
    return (
        <>
            {/* Surprise Body Section Area */}
            <div className="surprise-body-section">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="surpise-body-img">
                                <img src={surPriseImg} className="img-fluid" alt="SURPRISEBODYIMG" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="surprise-body-details text-start">
                                <div className="surprise-heading">
                                    <h2><span style={{ color: ' #7dd6f6' }}>Surprise Your Body</span> With Extra Care...</h2>
                                    <p>Rapidiously evisculate user-centric functionalities for highly efficient nterfaces.
                                        Competently leverage other's scalable technology before synergistic manufactured products.</p>
                                </div>
                                <div className="rating-area">
                                    <img src={ratingShape} alt="ratingshape" />
                                    <div className="rating-text d-flex">
                                        <h2>4.8</h2>
                                        <p>Medicit Overall Rating Based on 4957 Reviews.</p>
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

export default SurpriseBody;