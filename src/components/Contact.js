import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <form id="contact-form">
                    <input type="text" placeholder="Your Name" required name="user_name" />
                    <input type="email" placeholder="Your Email" required name="user_email" />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" className="glow-genz-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;