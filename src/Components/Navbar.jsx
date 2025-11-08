import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    const navlink = <>
        <div className='flex gap-5 text-1xl font-bold'>
            <Link to="/about">About</Link>

        </div>
    </>
    const products = <>
        <div className='flex gap-5 text-1xl font-bold'>
            <Link to="/products">Products</Link>
        </div>

    </>

    const data1 = <>
        <div>
            <Link to="/data">Data</Link>
        </div>
    </>

    const home = <>
        <div>
            <Link to="/">Home</Link>
        </div>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>{navlink}</a></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">{home}</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>{navlink}</a></li>
                        <li>{products}</li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">{data1}</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;