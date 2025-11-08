import React from 'react';
import Navbar from './Navbar';
import Fotter from './Fotter';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default RootLayout;