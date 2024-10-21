import React from 'react';
import mypic from '../jiya.jpg';
import './About.css'; 

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about__container">
                <div className="about__img">
                    <img src={mypic} alt="Jiya Joy" className="profile-pic" />
                </div>

                <div className="about__info">
                    <h2 className="about__subtitle">I'm Jiya Joy</h2>
                    <span className="about__profession">
                        Full Stack Developer | Java Backend Developer | Spring Boot | Microservices
                    </span>
                    <p className="about__text">
                        I am an MTech graduate in Computer Science with expertise in web development technologies, including React and Spring Boot. I have a passion for creating innovative solutions and enhancing user experiences through technology.
                    </p>

                    <div className="about__social">
                        <a href="https://www.linkedin.com/in/jiya-joy-a0a119263" target="_blank" rel="noopener noreferrer" className="about__social-icon">LinkedIn</a>
                        <a href="https://github.com/jiyajoy123" target="_blank" rel="noopener noreferrer" className="about__social-icon">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
