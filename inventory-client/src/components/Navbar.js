import React from 'react';
import { Link } from "react-router-dom";
import '../components/Navbar.css'; // Import your CSS file

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-static-top bg-primary">
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
                            <Link className="nav-link active w3-padding" to="/">
                                Home
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link w3-padding" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link w3-padding" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link w3-padding" to="/gallery">Gallery</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link w3-padding" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Management Hub
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/">Inventory Management</Link>
                                <Link className="dropdown-item" to="/">Expense Management</Link>
                                <Link className="dropdown-item" to="/">Donor Management</Link>
                            </div>
                        </li>

                    </ul>

                    {/* Right-aligned buttons */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item moveright">
                            <Link className="nav-link" to="/login">
                                SignIn
                            </Link>
                        </li>
                        <li className="nav-item moveright">
                            <Link className="nav-link" to="/signup">
                                SignUp
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
