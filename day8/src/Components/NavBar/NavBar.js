import React from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <div className='navbar'>
            <span className='nav-brand'>
                CARDS
            </span>
            <ul className='nav-links'>
                <Link to={'/'} className='nav-items'>
                    <li> Home </li>
                </Link>

                <Link to={{
                    pathName: '/about',
                    state: {loading: false}
                }} className='nav-items'>
                    <li> About </li>
                </Link>

                <Link to={'/users'} className='nav-items'>
                    <li> Users </li>
                </Link>
            </ul>
        </div>
    );
}