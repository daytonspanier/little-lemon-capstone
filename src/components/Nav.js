import React from 'react';
import "../Styles/Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav className='navbar'>
           <img className='navLogo' src='icons_assets/Logo.svg'></img>
            <ul className='navLinks'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/aboutpage'>About</Link>
                </li>
                <li>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li>
                    <Link to='/reservations'>Reservations</Link>
                </li>
                <li>
                    <Link to='/orderonline'>Order Online</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>

    );
};

export default Nav;