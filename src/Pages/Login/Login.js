import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const gIcon = <FontAwesomeIcon icon={faGoogle} />;
    const { signInByGoogle } = useAuth();
    return (
        <>
            <div className="login-form my-5 py-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="service-title">
                                <h2>Please Login</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form className='loginForm mt-5 mb-3'>
                                <input type="email" name="email" id="email" placeholder='Please enter your email...' />
                                <input type="password" name="pass" id="pass" placeholder='Please enter your password...' />
                                <button type="submit">Login</button>
                                <p className='already-have-ac-txt'>New Here? <Link to='/signup'>Sign up</Link> </p>
                            </form>
                            <button onClick={signInByGoogle} className='google-btn'>{gIcon} Login with Google</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Login;