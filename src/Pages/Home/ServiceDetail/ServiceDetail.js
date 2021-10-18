import useServices from '../../../hooks/useServices';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const ServiceDetail = () => {
    const { serviceID } = useParams();
    const { services } = useServices({});

    const matchedCourse = services.find(service => service.id === parseInt(serviceID));

    return (
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
                        <img src={matchedCourse?.img} alt="SingleServiceIMG" className='img-fluid' />
                    </div>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <div className="single-service-detail text-start">
                        <h3>{matchedCourse?.name}</h3>
                        <p>Details: <br /><span>{matchedCourse?.desc}</span></p>
                        <h5>Report: <span>{matchedCourse?.report}</span></h5>
                        <h4>Price: <span>${matchedCourse?.price}</span></h4>
                        <Link to='/contact'>Contact us</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetail;