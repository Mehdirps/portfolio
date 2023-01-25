import React from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

const Welcome = () => {

    return (
        <>
            <section className='welcome-page'>
                <div className="music">
                    <Icon icon="material-symbols:music-video" className='icon'/>
                    <audio controls loop>
                        <source src="./music/pokemon-1.mp3" />
                    </audio>
                </div>
                <div className="container">
                    <div className="container-img">
                        <figure className="title">
                            <img src="./img/title.svg" alt="Illustration du titre du site" />
                        </figure>
                        <figure className="logo">
                            <img src="./img/Logo.svg" alt="Logo du site" />
                        </figure>
                    </div>
                    <div className="next">
                        <NavLink exact="true" to='/presentation'>
                            <p>Appuyer pour continuer</p>
                        </NavLink>
                    </div>
                    <div className="copyright">
                        <Icon icon="material-symbols:copyright-outline" />
                        <p><span className='year'>2023</span> Mehdi Raposo.</p>
                    </div>
                </div>
                <div className="background1"></div>
                <div className="background2"></div>
            </section>
        </>
    );
};

export default Welcome;