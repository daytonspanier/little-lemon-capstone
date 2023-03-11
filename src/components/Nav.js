import React from 'react';
import "../Styles/Nav.css";

function Nav() {
    return(
        <nav className='navbar'>
           <img className='navLogo' src='icons_assets/Logo.svg'></img>
            <ul className='navLinks'>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Menu</a>
                </li>
                <li>
                    <a href='#'>Reservations</a>
                </li>
                <li>
                    <a href='#'>Order Online</a>
                </li>
                <li>
                    <a href='#'>Login</a>
                </li>
            </ul>
        </nav>

    );
};

export default Nav;