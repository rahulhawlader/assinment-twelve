import React from 'react';
import Benner from '../Benner/Benner';
import Products from '../Products/Products';
import Contack from './ContackUs/Contack';
import Reviews from './Reviews/Reviews';
import Summeris from './Summeris/Summeris';

const Home = () => {
    return (
        <div className='max-w-7xl sm:min-w-sm mx-auto px-12'>
            <Benner></Benner>
            <Products></Products>
            <Summeris></Summeris>
            <Reviews></Reviews>
            <Contack></Contack>

        </div>
    );
};

export default Home;