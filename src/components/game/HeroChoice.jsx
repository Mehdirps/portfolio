import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHero } from '../../stores/HeroSlice'
import { setOpenChoice } from '../../stores/HeroSlice';

const HeroChoice = () => {
    const pokemonList = [
        {
            'name': 'abra',
            'file': 'abra.png'
        },
        {
            'name': 'bulbizarre',
            'file': 'bulbizarre.png'
        },
        {
            'name': 'carapuce',
            'file': 'carapuce.png'
        },
        {
            'name': 'ferosinge',
            'file': 'ferosinge.png'
        },
        {
            'name': 'mew',
            'file': 'mew.png'
        },
        {
            'name': 'miaouss',
            'file': 'miaouss.png'
        },
        {
            'name': 'mimitoss',
            'file': 'mimitoss.png'
        },
        {
            'name': 'mini-draco',
            'file': 'mini-draco.png'
        },
        {
            'name': 'pikachu',
            'file': 'pikachu.png'
        },
        {
            'name': 'psykokwak',
            'file': 'psykokwak.png'
        },
        {
            'name': 'rattata',
            'file': 'rattata.png'
        },
        {
            'name': 'rondoudou',
            'file': 'rondoudou.png'
        },
        {
            'name': 'ronflex',
            'file': 'ronflex.png'
        },
        {
            'name': 'roucool',
            'file': 'roucool.png'
        },
        {
            'name': 'salameche',
            'file': 'salameche.png'
        },
    ];
    const dispatch = useDispatch();
    const hero = useSelector((state) => state.hero.hero)
    const open = useSelector((state) => state.hero.open)

    return (
        <>
            {
                open ?
                    <div className='hero-choice'>
                        <h2>
                            Choisissez votre partenaire d'aventure !
                        </h2>
                        <div className="hero-selected" style={{ opacity: hero.name ? 1 : 0 }}>
                            <p>Vous avez choisi : <span>{hero.name}</span></p>
                            <img src={`./img/icons/pokemons/${hero.file}`} alt="" />
                        </div>
                        <div className="hero-container">
                            {
                                pokemonList.map((pokemon, id) =>
                                    <div className="hero" id={hero.name === pokemon.name ? 'choised' : ''} onClick={() => dispatch(setHero(pokemon))} key={id}>
                                        <p>{pokemon.name}</p>
                                        <figure className='hero-img'>
                                            <img src={`./img/icons/pokemons/${pokemon.file}`} alt="" />
                                        </figure>
                                    </div>
                                )
                            }
                        </div>
                        <div className="confirm" onClick={() =>
                            hero.length > 0 || open ? dispatch(setOpenChoice(false)) : ''
                        }>
                            Confirmer mon choix !
                        </div>
                    </div >
                    : ''
            }
        </>
    );
};

export default HeroChoice;