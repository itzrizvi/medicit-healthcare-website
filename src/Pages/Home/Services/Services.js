import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const { services } = useServices({});

    return (
        <>
            <Container className='my-5 py-5'>
                <Row>
                    <div className="service-title mb-5">
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