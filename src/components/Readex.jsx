import React from 'react';
import ReadexHeader from './réadex/ReadexHeader';
import RealisationsList from './réadex/RealisationsList';
import { useSelector } from 'react-redux';

const Readex = () => {
    const readex = useSelector((state) => state.readex.value)

    return (
        <section className="readex">
            {
                readex ? <ReadexHeader /> : ''
            }

            <RealisationsList />
        </section>
    );
};

export default Readex;