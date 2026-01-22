import React from 'react';
import './Navbar.css'; // Assurez-vous de créer ce fichier pour les styles

const Navbar = () => {
    return (
        <header id="navbar">
            <nav className="nav-container">
                <div className="logo">ZINEDDINE<span className="logo-accent">-dev</span></div>
                <ul className="nav-menu">
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
                <div className="nav-social">
                    {/* Ajouter des icônes de réseaux sociaux ici */}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;