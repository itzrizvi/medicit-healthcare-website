import useServices from '../../../hooks/useServices';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const ServiceDetail = () => {
    // Using useParams Hook for dynamic ID
    const { serviceID } = useParams();
    // Using Use services custom hook for getting data
    const { services } = useServices({});

    // Finding the selected service for showing details
    const matchedTest = services.find(service => service.id === parseInt(serviceID));

    return (
        // Service Details Area
        <Container className='my-5'>
            <Row>
                <Row>
                    <Col>
                        <div className="service-title mb-5">
                            <h2>Service Detail</h2>
                        </div>
                    </Col>
                </Row>
                <Col md={6} sm={6} xs={12}>
                    <div className="single-service-img">
                        <img src={matchedTest?.img} alt="SingleServiceIMG" className='img-fluid' />
                    </div>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <div className="single-service-detail text-start">
                        <h3>{matchedTest?.name}</h3>
                        <p>Details: <br /><span>{matchedTest?.desc}</span></p>
                        <h5>Report: <span>{matchedTest?.report}</span></h5>
                        <h4>Price: <span>${matchedTest?.price}</span></h4>
                        <Link to='/contact'>Contact us</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetail;