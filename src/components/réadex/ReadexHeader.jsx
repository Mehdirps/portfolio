import React from 'react';
import { Icon } from '@iconify/react';

const ReadexHeader = () => {
    return (
        <div className="readex-header">
            <div className="top">
                <p>Readex</p>
                <figure className='icon'>
                    <img src="./img/icons/pokedex.png" alt="Icon Pokédex" />
                </figure>
                <Icon icon="material-symbols:close-rounded" className='close' />
            </div>
            <div className="bottom">
                <div className="list-length">
                    <figure>
                        <img src="./img/icons/pokeball.png" alt="Icon Pokéball" />
                    </figure>
                    <p>12</p>
                </div>
                <Icon icon="material-symbols:sort" className='sort'/>
            </div>
        </div>
    );
};

export default ReadexHeader;