// pages/Skills.js
import React from 'react';

const skills = [
  'JavaScript',
  'React',
  'Spring Boot',
  'MySQL', 
  'Git',
  'REST API',
  'HTML & CSS'
];

const Skills = () => (
  <section className='section'>
    <h1>Skills</h1>
    <ul className='skills-list'>
      {skills.map(skill => <li key={skill}>{skill}</li>)}
    </ul>
  </section>
);

export default Skills;
