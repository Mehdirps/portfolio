import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const MusicPlayer = () => {
    const [open, setOpen] = useState(false);

    const openPlayer = () => {
        if (open) {
            setOpen(false);
            return;
        }
        setOpen(true);
    }
    return (
        <section className="music-player">
            <Icon icon="material-symbols:music-video" className='icon' onClick={openPlayer} />
            {
                open ?
                    <div className="music-container">
                        <div className="music">
                            <p>Musique 1</p>
                            <div className="container">
                                <audio controls loop>
                                    <source src="./music/pokemon-1.mp3" />
                                </audio>
                            </div>
                        </div>
                        <div className="music2">
                            <p>Musique 2</p>
                            <div className="container">
                                <audio controls loop>
                                    <source src="./music/pokemon-2.mp3" />
                                </audio>
                            </div>
                        </div>
                    </div>
                    : ''
            }
        </section>
    );
};

export default MusicPlayer;