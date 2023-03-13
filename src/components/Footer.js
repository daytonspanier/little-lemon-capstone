import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="grid-container-footer">
            <div className="footer-grid-item footer-logo">
                <img src="icons_assets/littlelemonlogo-white.png" alt="footer logo"/>
            </div>
            <div className="footer-grid-item door-nav">
                <h5>Doormat Navigation</h5>
                <ul className="footerLinks">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutpage">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/orderonline">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-grid-item contact">
                <h5>Contact</h5>
                <ul className="footerLinks">
                    <li>
                        <a href="/">Address</a>
                    </li>
                    <li>
                        <a href="/">Phone #</a>
                    </li>
                    <li>
                        <a href="/">Email</a>
                    </li>
                </ul>
            </div>
            <div className="footer-grid-item social-links">
                <h5>Social Media Links</h5>
                <ul className="footerLinks">
                    <li>
                        <a href="/">Instagram</a>
                    </li>
                    <li>
                        <a href="/">Facebook</a>
                    </li>
                    <li>
                        <a href="/">Twitter</a>
                    </li>
                    <li>
                        <a href="/">TikTok</a>
                    </li>
                </ul>
            </div>
        </footer>

    );
};

export default Footer;