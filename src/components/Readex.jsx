import React from 'react';
import ReadexHeader from './réadex/ReadexHeader';
import RealisationsList from './réadex/RealisationsList';

const Readex = () => {
    return (
        <section className="readex">
            <ReadexHeader />
            <RealisationsList />
        </section>
    );
};

export default Readex;