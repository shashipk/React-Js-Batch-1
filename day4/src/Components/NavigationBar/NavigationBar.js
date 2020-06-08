import React from "react";
import "./NavigationBar.css";


export default function NavBar() {
    return(
        <div className="navbar-wrapper">
            <span className="navbar-logo">
                Users Search
            </span>

            <div className="navbar-btn-container">
                <button className="nav-btn">
                    HOME
                </button>

                <button className="nav-btn">
                    ABOUT US
                </button>

                <button className="nav-btn">
                    CONTACT US
                </button>
            </div>
        </div>
    );
}