import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css';

function Header() {
    return <>
        <h1>Music App</h1>
        <Navbar>
            <NavLink className='nav-link' to='/'>Home</NavLink> 
            <NavLink className='nav-link' to='artists'>Artists</NavLink>
            <NavLink className='nav-link' to='song-list'>Songs List</NavLink>
        </Navbar>
        <Outlet />
    </>
}

export default Header;

// need activateClassName to do current css link but need another script?