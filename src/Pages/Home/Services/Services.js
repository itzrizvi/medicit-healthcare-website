import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <>
            <Container className='my-5 py-5'>
                <Row>
                    <div className="service-title">
                        <h2>Our Services</h2>
                    </div>
                </Row>
                <Row>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}></Service>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Services;