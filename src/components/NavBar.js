import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink><br/>
            <NavLink to="/counter">Counter</NavLink><br/>
            <NavLink to="/things">Things</NavLink><br/>
        </nav>
    );
}

export default NavBar;