import React from 'react';
import Benner from '../Benner/Benner';

import Products from '../Products/Products';
import Summery from '../Summery/Summery';
import Summeris from './Summeris/Summeris';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Products></Products>
            <Summeris></Summeris>

        </div>
    );
};

export default Home;