// pages/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Book Store API', description: 'RESTful API to manage books and orders using Spring Boot.', link: '#' },
  { id: 2, title: 'CareerSync Job Portal', description: 'A job portal designed for Nashik city with email alerts.', link: '#' },
  { id: 3, title: 'Freelancer Task Manager', description: 'Manage clients, projects, tasks with Spring Boot + Thymeleaf.', link: '#' }
];

const Projects = () => (
  <section className='section'>
    <h1>Projects</h1>
    <div className='project-grid'>
      {projects.map((p) => (
        <div key={p.id} className='project-card'>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <a href={p.link} target='_blank' rel='noopener noreferrer'>View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 
