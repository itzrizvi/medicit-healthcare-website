import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import notFoundImg from '../../Images/notFoundpage.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>404!!! PAGE NOT FOUND</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="not-found-image">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <img src={notFoundImg} className="img-fluid" alt="NOTFOUNDIMG" />
                        </Col>
                    </Row>
                </Container>


            </div>
        </>
    );
};

export default NotFound;