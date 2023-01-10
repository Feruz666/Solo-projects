import React from "react"
import logo from "../assets/pngegg.png"

export default function Navbar() {
    return (
        <div className="nav-header">
            <div className="nav-logo">
                <img className="logo" src={logo} alt="meme" />
                <h2 className="nav-logo-name">Meme Generator</h2>
            </div>
            <div className="nav-text">
                <p>React Course - Project 3</p>
            </div>
        </div>
    )
}