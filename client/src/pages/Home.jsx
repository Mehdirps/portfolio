import React from 'react';
import { useSelector } from 'react-redux';
import Ball from '../components/Ball';
import DevCard from '../components/DevCard';
// import Game from '../components/Game';
import Readex from '../components/Readex';
import SkillsBag from '../components/SkillsBag'
import ExpTeam from '../components/ExpTeam';

const Home = () => {
    const readex = useSelector((state) => state.readex.openReadex);
    const devCard = useSelector((state) => state.devCard.openDevCard);
    const expTeam = useSelector((state) => state.expTeam.open);
    const skillBag = useSelector((state) => state.skillsBag.open);
    const ballDisplay = useSelector((state) => state.ball.display)

    return (
        <section className="home">
            {
                readex || devCard || expTeam || skillBag || ballDisplay !== 'ball-off' ?
                    null :
                    <section className="home-title">
                        <h1>Bienvenue dans mon aventure !
                            <span className='second-line'>Venez découvrir mon parcour de Développeur Web et Mobile <img src="./img/icons/computer.png" alt="Icon d'un ordinateur portable" /></span>
                        </h1>
                    </section>
            }
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