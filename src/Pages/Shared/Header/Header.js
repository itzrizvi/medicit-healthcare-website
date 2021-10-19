import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../Images/Logo.png';
import './Header.css';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const twitIcon = <FontAwesomeIcon icon={faTwitter} />
    const pintrstIcon = <FontAwesomeIcon icon={faPinterest} />
    const instaIcon = <FontAwesomeIcon icon={faInstagram} />

    const { user, logOut } = useAuth();

    const activeLink = {
        borderBottom: '1px solid #162F62',
        color: "#7DD6F6"
    }

    return (
        <div>
            <div className="top-bar">
                <Container>
                    <Row>
                        <Col md={4} sm={4} xs={12}>
                            <ul className="social-icon d-flex">
                                <li><Link to="/home">{fbIcon}</Link></li>
                                <li><Link to="/home">{twitIcon}</Link></li>
                                <li><Link to="/home">{pintrstIcon}</Link></li>
                                <li><Link to="/home">{instaIcon}</Link></li>
                            </ul>
                        </Col>
                        <Col md={8} sm={8} xs={12} className='login-signup text-end'>
                            <div className="login-signup-links">
                                <Link to="/signup" className='after-effect'>Sign up</Link>
                                {user?.email ?
                                    <button onClick={logOut} className="logout-btn">Logout</button> :
                                    <Link to="/login">Login</Link>}
                            </div>
                            <div className="loged-in-data">
                                <Link to="/home">{user?.displayName}</Link>
                                {user?.photoURL && <Link className='user-img-link' to="/home">
                                    <img className='user-img' src={user?.photoURL} alt="" />
                                </Link>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <header className='head'>
                <Container>
                    <Row>
                        <Navbar variant="light" collapseOnSelect expand="md">
                            <Navbar.Brand as={Link} to="/home">
                                <div className="logo">
                                    <img src={logo} alt="LOGO" />
                                </div>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className='justify-content-end nav-menu'>
                                <Nav.Link activeStyle={activeLink} as={NavLink} to="/home">Home</Nav.Link>
                                <Nav.Link activeStyle={activeLink} as={NavLink} to="/about">About</Nav.Link>
                                <Nav.Link activeStyle={activeLink} as={NavLink} to="/specialist">Our Specialists</Nav.Link>
                                <Nav.Link activeStyle={activeLink} as={NavLink} to="/contact">Contact</Nav.Link>
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                </Container>
            </header>
        </div>
    );
};

export default Header;