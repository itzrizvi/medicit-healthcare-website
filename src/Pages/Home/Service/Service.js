import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, price, report, img, id } = props.service;
    return (
        <Col md={4} sm={6} xs={12} className='text-start mb-5'>
            <div className="service-card">
                <div className="service-img">
                    <img src={img} alt="ServiceImage" className='img-fluid' />
                </div>
                <div className="service-title-details">
                    <h3>{name}</h3>
                    <p>Report: <span>{report}</span></p>
                    <p>Price: <span>${price}</span></p>
                    <Link to={`/servicedetail/${id}`}>
                        <button>See Details</button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;