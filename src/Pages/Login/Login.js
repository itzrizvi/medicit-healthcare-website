import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const gIcon = <FontAwesomeIcon icon={faGoogle} />;
    const githubIcon = <FontAwesomeIcon icon={faGithub} />;

    const {
        signInWithEmail,
        signInByGoogle,
        signInByGithub,
        handleEmail,
        handlePassword,
        setUser } = useAuth();

    const location = useLocation();
    const hostory = useHistory();
    const redirectURL = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInByGoogle()
            .then(result => {
                hostory.push(redirectURL);
            })
    }

    const handleEmailPassSignIn = (e) => {
        e.preventDefault();
        signInWithEmail()
            .then((result) => {
                setUser(result.user);
                hostory.push(redirectURL);
            })
    }

    const handleGithubSignIn = () => {
        signInByGithub()
            .then((result) => {
                setUser(result.user);
                hostory.push(redirectURL);
            })
    }

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
                            <form onSubmit={handleEmailPassSignIn} className='loginForm mt-5 mb-3'>
                                <input type="email" onBlur={handleEmail} name="email" id="email" placeholder='Please enter your email...' />
                                <input type="password" onBlur={handlePassword} name="pass" id="pass" placeholder='Please enter your password...' />
                                <button type="submit">Login</button>
                                <p className='already-have-ac-txt'>New Here? <Link to='/signup'>Sign up</Link> </p>
                            </form>
                            <button onClick={handleGoogleSignIn} className='google-btn'>{gIcon} Login with Google</button>
                            <button onClick={handleGithubSignIn} className='github-btn ms-3'>{githubIcon} Login with Github</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Login;