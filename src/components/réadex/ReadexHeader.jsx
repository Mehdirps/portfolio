import React from 'react';
import { Icon } from '@iconify/react';
import SortRealisations from './SortRealisations';
import { useSelector } from 'react-redux';

const ReadexHeader = () => {
    const length = useSelector((state) => state.length.value)
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
                    <p>{length}</p>
                </div>
                <div className="sort">
                    <Icon icon="material-symbols:sort" className='sort-icon' />
                    <SortRealisations />
                </div>
            </div>
        </div>
    );
};

export default ReadexHeader;