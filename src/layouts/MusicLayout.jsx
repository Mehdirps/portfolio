import React from 'react';
import { Icon } from '@iconify/react';
import { Outlet } from 'react-router-dom';

const MusicLayout = () => {
    return (
        <>
            <div className="music">
                <Icon icon="material-symbols:music-video" className='icon' />
                <audio controls loop>
                    <source src="./music/pokemon-1.mp3" />
                    <source src="./music/pokemon-2.mp3" />
                </audio>
            </div>
            <Outlet />
        </>
    );
};

export default MusicLayout;