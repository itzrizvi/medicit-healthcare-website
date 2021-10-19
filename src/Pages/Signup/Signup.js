import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Signup.css';

const Signup = () => {

    const {
        handleName,
        handleEmail,
        handlePassword,
        signUpByEmailPassWord,
        handlePhoto,
        setNameAndPhoto } = useAuth();

    const handleRegistration = e => {
        e.preventDefault();
        signUpByEmailPassWord()
            .then((result) => {
                setNameAndPhoto();
                window.location.reload();
                console.log(result.user);
            })
    }
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
                            <form onSubmit={handleRegistration} className='signUpForm my-5'>
                                <input type="text" onBlur={handleName} name="name" id="name" placeholder='Please enter your name...' required />
                                <input type="email" onBlur={handleEmail} name="email" id="email" placeholder='Please enter your email...' required />
                                <input type="password" onBlur={handlePassword} name="pass" id="pass" placeholder='Please enter your password...' required />
                                <input type="text" onBlur={handlePhoto} name="photo" id="photo" placeholder='Please enter a valid url...' required />
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