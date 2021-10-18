import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <>
            <div className="signup-form my-5 py-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="service-title">
                                <h2>Please Sign up</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form className='signUpForm my-5'>
                                <input type="text" name="name" id="name" placeholder='Please enter your name...' />
                                <input type="email" name="email" id="email" placeholder='Please enter your email...' />
                                <input type="password" name="pass" id="pass" placeholder='Please enter your password...' />
                                <button type="submit">Sign up</button>
                                <p className='already-have-ac-txt'>Already have an account? <Link to='/login'>Login Here</Link> </p>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Signup;