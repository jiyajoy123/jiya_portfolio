import React from 'react';
import './Projects.css'; 
import pic from '../assets/images/pj0.jpg'; 
import pic1 from '../assets/images/trailsoftoronto.jpg'; 
import pic2 from '../assets/images/portfolio.jpg'; 
import pic3 from '../assets/images/androidsecure.jpg'; 
import pic4 from '../assets/images/ecom.jpg'; 
import pic5 from '../assets/images/review.jpg'; 

const projectsData = [
    {
        title: "PlanAhead",
        description: "The PlanAhead Event Planning App is designed to simplify and enhance your event planning experience. This android app helps you organize events, tasks, manage budgets, track guest lists, and customize invitations.",
        link: "https://github.com/Swathynairfeb2/Capstone",
        screenshot: pic,
    },
    {
        title: "E-Commerce Web App",
        description: "A cutting-edge Android application that enhances security by capturing images of unauthorized access attempts. This innovative solution deters theft and provides crucial evidence during security breaches.",
        link: "",
        screenshot: pic3,
    },
    {
        title: "Trails of Toronto",
        description: "The Android application, developed in Java using Android Studio, is a travel guide for exploring Toronto, featuring attractions, hotels, a city map, and options for users to save favorites and make notes about their preferred locations.",
        link: "https://github.com/jiyajoy123/TrailsOfToronto", 
        screenshot: pic1,
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with React showcasing skills, projects, and contact info.",
        link: "https://github.com/jiyajoy123/portfolio",
        screenshot: pic2,
    },
    {
        title: "E-Shop",
        description: "A full-stack E-Shop application using React, Spring Boot, and H2 database.",
        link: "https://github.com/jiyajoy123/E-Shop",
        screenshot: pic4,
    },
    {
        title: "Review Blog App",
        description: "This is the frontend of the Review Blog App built using React",
        link: "https://github.com/jiyajoy123/Review_Blog_React",
        screenshot: pic5,
    },
];

function Projects() {
    const handleLinkClick = (link) => {
        if (link) {
            window.open(link, '_blank'); // Open link in a new tab
        } else {
            alert("No GitHub link available for this project."); // Alert message
        }
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.screenshot} alt={`${project.title} Screenshot`} className="project-screenshot" />
                        <div className="project-screenshot-overlay">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <button 
                                onClick={() => handleLinkClick(project.link)} 
                                className="project-link"
                            >
                                View Project
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
