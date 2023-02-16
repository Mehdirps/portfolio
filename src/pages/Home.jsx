import React from 'react';
import Ball from '../components/Ball';
import DevCard from '../components/DevCard';
import Readex from '../components/Readex';

const Home = () => {
    return (
        <section className="home">
            <Readex />
            <DevCard />
            <Ball />
        </section >
    );
};

export default Home;