import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <p className="greeting">Hello, I'm Zineddine Sebih 👋</p>
                    <h1 className="hero-title">
                        <span id="typing-text">software engineer</span>
                        <span className="cursor">|</span>
                    </h1>
                    <p className="hero-quote">Expanding skills and discovering new ways to innovate</p>
                    <button className="glow-genz-button">Download CV</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;