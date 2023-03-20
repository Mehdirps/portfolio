import React from 'react';
import { useSelector } from 'react-redux';

const GameHero = (props) => {
    const hero = useSelector((state) => state.hero.hero)

    return (
        <>
            <figure className='personnage' style={{ top: props.top + '%', left: props.left + '%', right: props.right + '%,', bottom: props.bottom + '%' }}>
                <img src={`./img/icons/pokemons/${hero.file}`} alt="" />
            </figure>
            {/* <div className="buttons-container">
                <div className="button" id="up"><Icon icon="material-symbols:arrow-circle-up-outline" /></div>
                <div className="button" id="down"><Icon icon="material-symbols:arrow-circle-down-outline" /></div>
                <div className="button" id="right"><Icon icon="material-symbols:arrow-circle-right-outline" /></div>
                <div className="button" id="left"><Icon icon="material-symbols:arrow-circle-left-outline" /></div>
            </div> */}
        </>
    );
};

export default GameHero;