import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader';

const IndexLayout = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1700);
    }, [])
    return loader ? (
        <Loader />
    ) : (
        <div>
            <Outlet />
        </div>
    );
};

export default IndexLayout;