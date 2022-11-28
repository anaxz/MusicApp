import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import './Header.css';

function Header() {
    return <>
        <h1>Music App</h1>
        <Navbar id='navbar'>
            <NavLink activateClassName="active" className='nav-link' to='/'>Home</NavLink> 
            <NavLink activateClassName="active" className='nav-link' to='artists'>Artists</NavLink>
            <NavLink activateClassName="active" className='nav-link' to='song-list'>Songs List</NavLink>
        </Navbar>
        <Outlet />
    </>
}

export default Header;

// need activateClassName to do current css link but need another script?