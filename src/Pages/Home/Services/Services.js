import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    // Using useServices for Getting Data
    const { services } = useServices({});

    return (
        <>
            <Container className='mt-5 mb-1 py-5'>
                <Row>
                    <div className="service-title mb-5">
                        <h2>Our Services</h2>
                    </div>
                </Row>
                <Row>
                    {/* Maping Data for getting each services */}
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