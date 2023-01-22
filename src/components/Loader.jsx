import React from 'react';

const Loader = (props) => {

    return (
        <section className="loader" style={{ backgroundImage: `url(./img/loader-background/${props.background})` }}>
            <div className="container">
                <p>Chargement</p>
                <div className="icons-container">
                    <figure>
                        <img src={`./img/icons/pokemons/${props.pokemonOne}`} alt="" />
                    </figure>
                    <figure>
                        <img src={`./img/icons/pokemons/${props.pokemonTwo}`} alt="" />
                    </figure>
                    <figure>
                        <img src={`./img/icons/pokemons/${props.pokemonThree}`} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Loader;