import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Welcome from '../pages/Welcome';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Welcome />} />
                <Route index element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    );
};

export default index;