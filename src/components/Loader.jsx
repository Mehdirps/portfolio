import React from 'react';

const Loader = () => {
    return (
        <section className="loader">
            <div className="container">
                <p>Chargement</p>
                <div className="icons-container">
                    <figure>
                        <img src="./img/icons/bulbizarre.png" alt="" />
                    </figure>
                    <figure>
                        <img src="./img/icons/pikachu.png" alt="" />
                    </figure>
                    <figure>
                        <img src="./img/icons/roucool.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Loader;