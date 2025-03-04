import React from 'react';
import { FaMapMarkerAlt, FaUser } from "react-icons/fa"; 
import './Header.css';

function Header() {
    return (
        <div className='header'>
            {/* Profile Image */}
            <div className='logo'>
                <img src="./images/logooo.png" alt="Profile" className="logo-image" />
            </div>

            {/* Name and Details */}
            <div className='details'>
                <div className="name">
                    <FaUser className="icon" /> Venecia Kakusha
                </div>
                <div className="location">
                    <FaMapMarkerAlt className="icon" /> United Kingdom
                </div>
            </div>
        </div>
    );
}

export default Header;
