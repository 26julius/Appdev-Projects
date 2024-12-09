import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const account = {
        username: "Niebla",
        password: "Niebla"
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (userName === account.username && password === account.password) {
            setLoginStatus("Login Successful!");
            onLoginSuccess(); 
        } else {
            setLoginStatus("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h1>Welcome to Game Reviews!</h1>
            <h4>Login to Continue:</h4>
            <label>
                Username:
                <input
                    type="text"
                    value={userName}
                    onChange={handleUserNameChange}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>Login</button>
            <p>{loginStatus}</p>
        </div>
    );
}
