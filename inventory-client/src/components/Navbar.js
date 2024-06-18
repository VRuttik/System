import React from 'react';
import { Link } from "react-router-dom";
import '../components/Navbar.css';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/AWF-Logo.png" className="navbar-logo" alt="Logo" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active w3-padding-16 w3-margin-left" to="/">
                                    Home
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link w3-padding-16 w3-margin-left" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link w3-padding-16 w3-margin-left" to="/contact">Contact</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link w3-padding-16 w3-margin-left" to="/gallery">Gallery</Link>
                            </li>
                        </ul>

                        {/* Right-aligned buttons */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item moveright">
                                <Link className="nav-link w3-padding-16 w3-margin-left" to="/login">
                                    SignIn
                                </Link>
                            </li>
                            <li className="nav-item moveright">
                                <Link className="nav-link w3-padding-16 w3-margin-left" to="/signup">
                                    SignUp
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
