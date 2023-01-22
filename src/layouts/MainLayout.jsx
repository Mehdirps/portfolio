import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader';

const IndexLayout = () => {
    const [loader, setLoader] = useState(true);
    const [pokemonOne, setPokemonOne] = useState('');
    const [pokemonTwo, setPokemonTwo] = useState('');
    const [pokemonThree, setPokemonThree] = useState('');
    const [loaderBackground, setLoaderBackground] = useState('');

    const pokemonListOne = [
        "abra.png",
        "bulbizarre.png",
        "carapuce.png",
        "ferosinge.png",
        "mew.png"
    ];
    const pokemonListTwo = [
        "miaouss.png",
        "mimitoss.png",
        "mini-draco.png",
        "pikachu.png",
        "psykokwak.png"
    ];
    const pokemonListThree = [
        "rattata.png",
        "rondoudou.png",
        "ronflex.png",
        "roucool.png",
        "salameche.png"
    ];
    const loaderBackgroundList = [
        "illustration-paysage.jpg",
        "illustration-paysage2.jpg",
        "illustration-paysage3.jpg",
        "illustration-paysage4.jpg",
        "illustration-paysage5.jpg",
        "illustration-paysage6.jpg",
        "illustration-paysage7.jpg",
    ]

    useEffect(() => {
        const pokemonOneIndex = Math.floor(Math.random() * pokemonListOne.length);
        const pokemonOne = pokemonListOne[pokemonOneIndex]
        setPokemonOne(pokemonOne)

        const pokemonTwoIndex = Math.floor(Math.random() * pokemonListTwo.length);
        const pokemonTwo = pokemonListTwo[pokemonTwoIndex]
        setPokemonTwo(pokemonTwo)

        const pokemonThreeIndex = Math.floor(Math.random() * pokemonListThree.length);
        const pokemonThree = pokemonListThree[pokemonThreeIndex]
        setPokemonThree(pokemonThree)

        const backgroundIndex = Math.floor(Math.random() * loaderBackgroundList.length);
        const background = loaderBackgroundList[backgroundIndex]
        setLoaderBackground(background)

        setTimeout(() => {
            setLoader(false);
        }, 1700);
    }, [])

    return loader ? (
        <Loader pokemonOne={pokemonOne} pokemonTwo={pokemonTwo} pokemonThree={pokemonThree} background={loaderBackground} />
    ) : (
        <div>
            <Outlet />
        </div>
    );
};

export default IndexLayout;