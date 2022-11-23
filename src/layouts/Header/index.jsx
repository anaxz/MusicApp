import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return <>
        <h1>Music App</h1>
        <Navbar id='navbar'>
            <NavLink to='/'>Home</NavLink> 
            <NavLink to='artists'>Artists</NavLink>
            <NavLink to='song-list'>Songs List</NavLink>
        </Navbar>
        <Outlet />
    </>
}

export default Header;