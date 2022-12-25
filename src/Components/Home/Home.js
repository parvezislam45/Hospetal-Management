import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import Care from './Care';
import Carousel from './Carousel';
import Gallery from './Gallery';
import Info from './Info';
import Support from './Support';
import Swiper from './Swiper';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Banner></Banner>
            <Gallery></Gallery>
            <Care></Care>
            <Appoinment></Appoinment>
            <Swiper></Swiper>
            <Info></Info>
            <Support></Support>
        </div>
    );
};

export default Home;