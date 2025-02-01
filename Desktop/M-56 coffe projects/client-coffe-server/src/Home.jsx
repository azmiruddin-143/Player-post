import React from 'react';
import Header from './assets/Header';
import { Outlet } from 'react-router-dom';
import Coffes from './Coffes';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;