import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import IndexLayout from '../layouts/MainLayout';
import Welcome from '../pages/Welcome';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<IndexLayout />}>
                    <Route index element={<Welcome />} />
                    <Route path='*' element={<Welcome />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default index;