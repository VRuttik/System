import React from 'react';
import { Link } from "react-router-dom";
import '../components/Navbar.css';

function Nav() {
    return (
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
                    </ul>

                    {/* Right-aligned buttons */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item moveright">
                            <button className="btn btn-primary nav-link w3-padding-16 w3-margin-right" type="button"><a SignIn</button>
                        </li>
                        <li className="nav-item moveright">
                            <button className="btn btn-primary nav-link w3-padding-16 w3-margin-right" type="button">SignUp</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
