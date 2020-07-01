import React from "react";
import {Link} from "react-router-dom";

export default function SmallCards({ name, avatar }) {
    return (
        <div className="small-card-wrapper">
            <div className="blank-region" style={{background: `url(${avatar}) no-repeat center center`}}>
            </div>
            <div className="small-card-content">
                <h3> {name} </h3>
                <Link to={`/users/${name}`} className='small-card-btn'>
                    See More
                </Link>
            </div>
        </div>
    );
}