import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReadex } from '../stores/ReadexSlice';

const Navbar = () => {
    const readex = useSelector((state) => state.readex.value)
    const dispatch = useDispatch();

    const openReadex = () => {
        if (readex === true) {
            dispatch(setReadex(false))
            return;
        }
        dispatch(setReadex(true))
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
                    <li>
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