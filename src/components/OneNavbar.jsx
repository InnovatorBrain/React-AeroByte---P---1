import React from "react";
import logo from '../assets/logo.png';

export default function OneNavbar() {
    return (
        <nav>
            <img src={logo} className="nav--icon" />
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
}
