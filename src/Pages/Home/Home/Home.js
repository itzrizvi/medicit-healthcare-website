import React from 'react';
import Banner from '../Banner/Banner';
import IntensiveUnit from '../IntensiveUnit/IntensiveUnit';
import Services from '../Services/Services';
import SurpriseBody from '../SurpriseBody/SurpriseBody';

// HOME CONTAINER COMPONENT
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SurpriseBody></SurpriseBody>
            <Services></Services>
            <IntensiveUnit></IntensiveUnit>
        </div>
    );
};

export default Home;