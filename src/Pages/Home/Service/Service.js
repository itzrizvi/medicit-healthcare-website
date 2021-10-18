import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, price, report, img } = props.service;
    return (
        <Col md={4} className='service-card text-start mb-4'>
            <div className="service-img">
                <img src={img} alt="ServiceImage" className='img-fluid' />
            </div>
            <div className="service-title-details">
                <h3>{name}</h3>
                <p>Report: <span>{report}</span></p>
                <p>Price: <span>${price}</span></p>
                <Link to='/home'>See Details</Link>
            </div>
        </Col>
    );
};

export default Service;