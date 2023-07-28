import React from "react";
import logo from '../assets/logo.png';

export default function OneNavbar() {
    return (
        <nav>
            <img src={logo} className="nav--icon"  alt="The logo of AeroByte"/>
            <h4 className="nav--title">React AeroByte - P - 1</h4>
        </nav>
    );
}
