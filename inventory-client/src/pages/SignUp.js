import React, { useState } from 'react';
import '../pages/SignUp.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            console.log('User signed up successfully');
            // Reset form fields after successful signup
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="container signup-fixed">
            <div className="row">
                {/* Left side - Sign Up Form */}
                <div className="col-md-6 border border-primary">
                    <div className="signup-content">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>  
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="col-md-6 border border-primary">
                    <img
                        src="https://images.pexels.com/photos/2882638/pexels-photo-2882638.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Sign Up Image"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}

export default SignUp;



