import React from "react";
import './Card.css';

export default function Card({cardTitle, cardImage, cardLink}) {
    return(
        <div className='card-wrapper'>
            <div style={{background: `url(${cardImage}) no-repeat center center`}} className='card-image' />
            <a href={cardLink} className='card-header'> {cardTitle} </a>
        </div>
    );
}