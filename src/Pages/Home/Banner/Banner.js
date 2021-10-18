import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slideOne from '../../../Images/carousel/slide-01.jpg';
import slideTwo from '../../../Images/carousel/slide-02.jpg';
import slideThree from '../../../Images/carousel/slide-03.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>International Quality</h3>
                        <p>Medicit is one of the best kinds of company
                            in the diagnostics industry in whole world.</p>
                        <Link className='slide-btn' to='/contact'>Contact us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Best health care</h3>
                        <p>We have the best of the best specialist doctors
                            and therapists.</p>
                        <Link className='slide-btn' to='/contact'>Contact us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideThree}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Advanced technology</h3>
                        <p>We have the best techonology in the medical history.</p>
                        <Link className='slide-btn' to='/contact'>Contact us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;