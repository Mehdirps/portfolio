import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Layout from '../layouts/Layout';
import Dialogue from '../pages/Dialogue';
import Welcome from '../pages/Welcome';
import Test from '../pages/test';
import Home from '../pages/Home';
import MusicLayout from '../layouts/MusicLayout';

const index = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<MusicLayout />}>
                    <Route element={<AppLayout />}>
                        <Route index element={<Welcome />} />
                        <Route path='/presentation' element={<Dialogue />} />
                        <Route path='/test' element={<Test />} />
                        <Route element={<Layout />}>
                            <Route path='/accueil' element={<Home />} />
                        </Route>
                        <Route path='*' element={<Welcome />} />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default index;