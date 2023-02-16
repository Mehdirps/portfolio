import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReadex, setShowRealisation } from '../stores/ReadexSlice';
import { setDevCard } from '../stores/DevCardSlice';
import { setDisplay } from '../stores/BallSlice';

const Navbar = () => {
    const readex = useSelector((state) => state.readex.openReadex)
    const devCard = useSelector((state) => state.devCard.openDevCard);
    const dispatch = useDispatch();

    const openReadex = () => {

        if (readex === false) {
            dispatch(setDisplay('ball'))
        }

        if (readex === true) {
            dispatch(setReadex(false))
            dispatch(setShowRealisation(false))
            return;
        }
        if (devCard === true) {
            dispatch(setDevCard(false))
        }
        setTimeout(() => {
            dispatch(setDisplay('ball-off'))
            dispatch(setReadex(true))
            dispatch(setShowRealisation(true))
        }, 1000)
    }
    const openDevCard = () => {

        if (devCard === false) {
            dispatch(setDisplay('ball'))
        }
        if (devCard === true) {
            dispatch(setDevCard(false))
            return;
        }
        if (readex === true) {
            dispatch(setReadex(false))
        }

        setTimeout(() => {
            dispatch(setDisplay('ball-off'))
            dispatch(setDevCard(true))
        }, 1000)
    }
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul>
                    <li onClick={openReadex}>
                        <figure className='pokedex'>
                            <img src="./img/icons/pokedex.png" alt="Icon Pokédex" />
                        </figure>
                        <p>Réadex</p>
                    </li>
                    <li>
                        <figure className='pokeball'>
                            <img src="./img/icons/pokeball.png" alt="Icon Pokéball" />
                        </figure>
                        <p>Skills</p>
                    </li>
                    <li onClick={openDevCard}>
                        <figure className='dresseur'>
                            <img src="./img/icons/dresseur.png" alt="Icon avatar" />
                        </figure>
                        <p>Profil</p>
                    </li>
                    <li>
                        <figure className='cv'>
                            <img src="./img/icons/cv.png" alt="Icon C.V" />
                        </figure>
                        <p>C.V</p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;