import React from 'react';
import { FaReact, FaAngular, FaHtml5, FaCss3, FaJs, FaJava, FaNodeJs, FaDatabase, FaAndroid } from 'react-icons/fa';
import { SiSpringboot, SiDotnet, SiMysql, SiOracle, SiMicrosoftsqlserver, SiFirebase, SiSwift } from 'react-icons/si';
import './Skills.css'; 

function Skills() {
  const frontendSkills = [
    { icon: <FaReact size={50} color="#61DBFB" />, name: 'React JS (with Hooks, Redux)' },
    { icon: <FaAngular size={50} color="#DD0031" />, name: 'Angular' },
    { icon: <FaHtml5 size={50} color="#E34C26" />, name: 'HTML5' },
    { icon: <FaCss3 size={50} color="#1572B6" />, name: 'CSS3' },
    { icon: <FaJs size={50} color="#F7DF1E" />, name: 'JavaScript (ES6+)' },
  ];

  const backendSkills = [
    { icon: <FaJava size={50} color="#007396" />, name: 'Java (Core, Advanced)' },
    { icon: <SiSpringboot size={50} color="#6DB33F" />, name: 'Spring Boot (with Microservices)' },
    { icon: <FaNodeJs size={50} color="#68A063" />, name: 'Node.js' },
    { icon: <SiDotnet size={50} color="#512BD4" />, name: '.NET' },
  ];

  const databaseSkills = [
    { icon: <SiMysql size={50} color="#4479A1" />, name: 'MySQL' },
    { icon: <FaDatabase size={50} color="#F29111" />, name: 'H2 Database' },
    { icon: <SiOracle size={50} color="#F80000" />, name: 'Oracle Database' },
    { icon: <SiMicrosoftsqlserver size={50} color="#CC2927" />, name: 'MS SQL Server' },
    { icon: <SiFirebase size={50} color="#FFCA28" />, name: 'Firebase Realtime' },
  ];

  const mobileSkills = [
    { icon: <FaAndroid size={50} color="#3DDC84" />, name: 'Android (Java)' },
    { icon: <SiSwift size={50} color="#F05138" />, name: 'Swift (iOS Storyboard)' },
  ];

  const cloudSkills = [
    { icon: <SiFirebase size={50} color="#FFCA28" />, name: 'Firebase' },
    { icon: <SiFirebase size={50} color="#FFCA28" />, name: 'Firebase Realtime Database' },
  ];

  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      
      <h2>Frontend Development</h2>
      <div className="skills-grid">
        {frontendSkills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      <h2>Backend Development</h2>
      <div className="skills-grid">
        {backendSkills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      <h2>Databases</h2>
      <div className="skills-grid">
        {databaseSkills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      <h2>Mobile Development</h2>
      <div className="skills-grid">
        {mobileSkills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      <h2>Cloud & Realtime</h2>
      <div className="skills-grid">
        {cloudSkills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
