import React from 'react';
import Banner from '../Banner/Banner';
import IntensiveUnit from '../IntensiveUnit/IntensiveUnit';
import Services from '../Services/Services';

// HOME CONTAINER COMPONENT
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <IntensiveUnit></IntensiveUnit>
        </div>
    );
};

export default Home;