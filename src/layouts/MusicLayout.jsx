import React from 'react';
import { Icon } from '@iconify/react';
import { Outlet } from 'react-router-dom';

const MusicLayout = () => {
    return (
        <>
            <div className="music-container">

                <div className="music">
                    <p>Musique 1</p>
                    <div className="container">
                        <Icon icon="material-symbols:music-video" className='icon' />
                        <audio controls loop>
                            <source src="./music/pokemon-1.mp3" />
                        </audio>
                    </div>
                </div>
                <div className="music2">
                    <p>Musique 2</p>
                    <div className="container">
                        <Icon icon="material-symbols:music-video" className='icon' />
                        <audio controls loop>
                            <source src="./music/pokemon-2.mp3" />
                        </audio>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default MusicLayout;