import React from "react";

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
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Menu</a>
                    </li>
                    <li>
                        <a href="/">Reservations</a>
                    </li>
                    <li>
                        <a href="/">Order Online</a>
                    </li>
                    <li>
                        <a href="/">Log In</a>
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