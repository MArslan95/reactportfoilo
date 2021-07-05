import React from 'react'
import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")} id="menu">
            <ul>
                <li onClick={() => setMenuOpen(false)}><a href="#intro">Home</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#portfoilo">Portfoilo</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#works">Works</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#testimonial">Testimonial</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
