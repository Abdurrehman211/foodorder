import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogin = () => {
        navigate("/Login");
    };

    const handlePages = () => {
        navigate("/");
    };

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar px-2">
                <div className="logo">Food Order</div>
                <ul className={`nav-links ${isOpen ? "show" : ""}`} id="nav-links">
                    <li><a onClick={handlePages} style={{ cursor: "pointer" }} id="home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Products">Services</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <button className="cta" onClick={handleLogin}>
                        <span>Get Started</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
