import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import the icons
import './Contact.css'; 

function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3 className="contact-subtitle">Get in Touch</h3>
                    <p className="contact-text">If you have any questions,don't hesitate to reach out!</p>
                    <p className="contact-text"><strong>Email:</strong> <FaEnvelope /> jiyajoy123@gmail.com</p>
                </div>
                <div className="social-links">
                    <h3 className="contact-subtitle">Connect with Me</h3>
                    <a href="https://www.linkedin.com/in/jiya-joy-a0a119263" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/jiyajoy123" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
