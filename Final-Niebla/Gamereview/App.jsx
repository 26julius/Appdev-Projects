import React, { useState } from 'react';
import Login from './Login';
import Reviews from './Reviews';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="app-container">
            {isLoggedIn ? (
                <Reviews />
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
            )}
        </div>
    );
}
