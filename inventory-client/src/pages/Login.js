import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../pages/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook for navigation

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                navigate('/main'); // Use navigate function to navigate
            } else {
                setError('Invalid email or password');
            }
        })
        .catch(error => console.error('Error:', error));
    }

    return (
        <div className="container login-fixed">
            <div className="row">
                {/* Left side - Login Form */}
                <div className="col-md-6 border border-primary">
                    <div className="login-content">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    required
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-danger">{error}</p>}
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="col-md-6 border border-primary">
                    <img
                        src="https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Login Image"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
