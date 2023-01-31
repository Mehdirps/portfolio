import React from 'react';
import { useSelector } from 'react-redux';

const RealisationDetails = () => {
    const realisation = useSelector((state) => state.readex.realisation)
    
    return (    
        <section className="realisation">
            {
                realisation.name
            }
        </section>
    );
};

export default RealisationDetails;