import React, { useState, useEffect, useMemo } from 'react';

const Loader = () => {
    const [loader, setLoader] = useState(true);
    const [pokemonOne, setPokemonOne] = useState('');
    const [pokemonTwo, setPokemonTwo] = useState('');
    const [pokemonThree, setPokemonThree] = useState('');
    const [loaderBackground, setLoaderBackground] = useState('');

    const pokemonListOne = useMemo(() => [
        "abra.png",
        "bulbizarre.png",
        "carapuce.png",
        "ferosinge.png",
        "mew.png"
    ], []);
    const pokemonListTwo = useMemo(() => [
        "miaouss.png",
        "mimitoss.png",
        "mini-draco.png",
        "pikachu.png",
        "psykokwak.png"
    ], []);
    const pokemonListThree = useMemo(() => [
        "rattata.png",
        "rondoudou.png",
        "ronflex.png",
        "roucool.png",
        "salameche.png"
    ], []);
    const loaderBackgroundList = useMemo(() => [
        "illustration-paysage.jpg",
        "illustration-paysage2.jpg",
        "illustration-paysage3.jpg",
        "illustration-paysage4.jpg",
        "illustration-paysage5.jpg",
        "illustration-paysage6.jpg",
        "illustration-paysage7.jpg",
    ], [])

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1700);
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

    }, [loaderBackgroundList, pokemonListOne, pokemonListThree, pokemonListTwo])


    return (
        <>
            {
                loader ?
                    <section className="loader" style={{ backgroundImage: `url(./img/loader-background/${loaderBackground})` }}>
                        <div className="container">
                            <p>Chargement</p>
                            <div className="icons-container">
                                <figure>
                                    <img src={`./img/icons/pokemons/${pokemonOne}`} alt={`Illustration du pokemon ${pokemonOne.split('.')[0]}`} />
                                </figure>
                                <figure>
                                    <img src={`./img/icons/pokemons/${pokemonTwo}`} alt={`Illustration du pokemon ${pokemonTwo.split('.')[0]}`} />
                                </figure>
                                <figure>
                                    <img src={`./img/icons/pokemons/${pokemonThree}`} alt={`Illustration du pokemon ${pokemonThree.split('.')[0]}`} />
                                </figure>
                            </div>
                        </div>
                    </section>
                    : ''
            }
        </>
    );
};

export default Loader;