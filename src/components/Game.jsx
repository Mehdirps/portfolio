import React, { useState } from 'react';
import GameHero from '../components/game/GameHero';
import HeroChoice from './game/HeroChoice';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenChoice } from '../stores/HeroSlice';

const Game = () => {
    const [top, setTop] = useState(0);
    const [bottom, setBottom] = useState(0);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const hero = useSelector((state) => state.hero.hero)
    const openChoice = useSelector((state) => state.hero.open)
    const dispatch = useDispatch();


    function handleKeyDown(event) {
        if (event.key === 'ArrowLeft') {
            left <= 0 ? setLeft(0) :
                setLeft(left - 5)
        }
        if (event.key === 'ArrowRight') {
            left >= 95 ? setRight(0) :
                setLeft(left + 5)
        }
        if (event.key === 'ArrowDown') {
            top >= 90 ? setBottom(0) :
                setTop(top + 5)
        }
        if (event.key === 'ArrowUp') {
            top <= 0 ? setTop(0) :
                setTop(top - 5)
        }
    }

    return (
        <section className='game' onKeyDown={handleKeyDown} tabIndex={0}>
            <div className="game-button" onClick={() => dispatch(setOpenChoice(true))} style={{ display: openChoice ? 'none' : 'flex' }} ><p>Jouer</p></div>
            {
                openChoice ?
                    <HeroChoice />
                    : ''
            }
            {
                hero.name && !openChoice ?
                    <GameHero top={top} bottom={bottom} right={right} left={left} />
                    : ''
            }
        </section>
    );
};

export default Game;