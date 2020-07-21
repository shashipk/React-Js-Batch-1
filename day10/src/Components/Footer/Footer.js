import React from "react";

import './Footer.css';

export default function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-left-col">
                    <img src={require('./logo.png')} alt="LOGO" className="logo" />
                        <div className="social-media">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                            <a href="#"><i className="fab fa-youtube" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <p className="rights-text">© 2020 Created By DarkCode All Rights Reserved.</p>
                </div>

                <div className="footer-right-col">
                    <h1>Our Newsletter</h1>
                    <div className="footer-border" />
                    <p>Enter Your Email to get our news and updates.</p>
                    <form action="" className="newsletter-form">
                        <input type="text" className="footer-txtb" placeholder="Enter Your Email" />
                            <input type="submit" className="footer-btn" value="submit" />
                    </form>
                </div>
            </div>
        </footer>
    );
}