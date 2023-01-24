import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import IndexLayout from '../layouts/MainLayout';
import Dialogue from '../pages/Dialogue';
import Welcome from '../pages/Welcome';
import Test from '../pages/test';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Welcome />} />
                <Route path='/presentation' element={<Dialogue />} />
                <Route path='/test' element={<Test />} />
                <Route path='*' element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    );
};

export default index;