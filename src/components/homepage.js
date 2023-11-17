import React from 'react';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

import backgroundImage from './static/mahesh.png'; 
 // Replace with the actual path to your background image

function Homepage() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    return (
        <div style={backgroundStyle}>
            <Navbar />

            
            <div className="text-center mt-4 mb-4">
                <Link to="/login">
                    <button className="btn btn-primary mr-3">Login</button>
                </Link>
                <Link to="/testpage">
                    <button className="btn btn-info">Medicine List Page</button>
                </Link>
            </div>
        </div>
    );
}

export default Homepage;
