import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                {/* If you want to include a logo image */}
                <img src="./images/logo.png" alt="Logo" className="logo-image" />
                </div>

            <div className='name'>
                {/* Your name */}
                <span className="name">Venecia Kakusha</span>
         </div>
        </div>
    );
}

export default Header;
