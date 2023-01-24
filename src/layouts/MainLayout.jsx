import React from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader';

const IndexLayout = () => {

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default IndexLayout;