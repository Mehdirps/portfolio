import React from 'react';
import Ball from '../components/Ball';
import DevCard from '../components/DevCard';
import Game from '../components/Game';
import Readex from '../components/Readex';
import SkillsBag from '../components/SkillsBag'
import ExpTeam from '../components/ExpTeam';

const Home = () => {
    return (
        <section className="home">
            <Readex />
            <DevCard />
            <SkillsBag />
            <Ball />
            <ExpTeam />
            {/* <Game /> */}
        </section >
    );
};

export default Home;