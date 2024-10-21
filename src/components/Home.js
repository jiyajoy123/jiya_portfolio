import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills'; 
import Projects from './Projects';
import Contact from './Contact';
import './Home.css';
import mypic from '../jiya.jpg';

function Home() {
  const [activeSection, setActiveSection] = useState(''); // Track the active section

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY;

    sections.forEach(section => {
      const offsetTop = section.offsetTop - 50; // Adjust based on navbar height
      const offsetHeight = section.offsetHeight;

      // Check if the current scroll position is within the section
      if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
        setActiveSection(section.getAttribute('id')); // Set the active section
      }
    });

    // If at the top of the page, set active section to ''
    if (scrollPos === 0) {
      setActiveSection(''); // Set to empty string when at the top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} /> {/* Pass the active section to Navbar */}
      <div className="home-container">
        <div className="overlay"></div>
        <div className="home-content">
          <img src={mypic} alt="jiya" className="profile-pic" />
          <h1 className="home-title">I'm Jiya, a Full-Stack Developer</h1>
          <p className="home-subtitle">
            Specializing in modern web development technologies like React, Spring Boot, and more.
          </p>
          <div className="home-buttons">
            <Link to="/skills">
              <button>Skills</button>
            </Link>
            <Link to="/projects">
              <button>My Projects</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Sections for scrolling */}
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
