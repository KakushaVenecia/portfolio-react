import React from 'react';
import './SocialLinks.css';
import { FaLinkedin, FaGithub, FaWordpress } from 'react-icons/fa'; // Using react-icons for icons

function SocialLinks() {
    return (
        <div className="social-links">
            <a
                href="https://www.linkedin.com/in/kakushavenecia/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://whenvenspeaks.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                <FaWordpress />
            </a>
            <a
                href="https://github.com/KakushaVenecia"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                <FaGithub />
            </a>
        </div>
    );
}

export default SocialLinks;
