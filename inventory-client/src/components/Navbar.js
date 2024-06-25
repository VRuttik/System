import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css'; // Import your CSS file

function Nav() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavbarToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-static-top bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={closeNavbar}>
                    <img src="/AWF-Logo.png" className="navbar-logo" alt="Logo" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavbarToggle}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link w3-padding" to="/" onClick={closeNavbar}>
                                Home
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link w3-padding" to="/about" onClick={closeNavbar}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link w3-padding" to="/contact" onClick={closeNavbar}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link w3-padding" to="/gallery" onClick={closeNavbar}>Gallery</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link w3-padding" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={closeNavbar}>
                                Management Hub
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/inventorydashboard" onClick={closeNavbar}>Inventory Management</Link>
                                <Link className="dropdown-item" to="/expensesdashboard" onClick={closeNavbar}>Expense Management</Link>
                                <Link className="dropdown-item" to="/donordashboard" onClick={closeNavbar}>Donor Management</Link>
                            </div>
                        </li>

                    </ul>

                    {/* Right-aligned buttons */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item moveright">
                            <Link className="nav-link" to="/login" onClick={closeNavbar}>
                                SignIn
                            </Link>
                        </li>
                        <li className="nav-item moveright">
                            <Link className="nav-link" to="/signup" onClick={closeNavbar}>
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

