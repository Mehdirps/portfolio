import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <figure className='pokedex'>
                        <img src="./img/icons/pokedex.png" alt="Icon Pokédex" />
                    </figure>
                    <p>Réadex</p>
                </li>
                <li>
                    <figure className='pokeball'>
                        <img src="./img/icons/pokeball.png" alt="Icon Pokéball" />
                    </figure>
                    <p>Skills Team</p>
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
    );
};

export default Navbar;