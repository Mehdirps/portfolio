import React from 'react';
import { useSelector } from 'react-redux';

const GameHero = (props) => {
    const hero = useSelector((state) => state.hero.hero)
    const personnage = useSelector((state) => state.hero.personnage)

    return (
        <>
            <figure className='personnage' style={{ top: props.top + '%', left: props.left + '%', right: props.right + '%,', bottom: props.bottom + '%' }}>
                <img src={`./img/icons/personnages/heroine-violet.png`} alt="" id='personnage' />
                <img src={`./img/icons/pokemons/${hero.file}`} alt="" />
            </figure>
        </>
    );
};

export default GameHero;