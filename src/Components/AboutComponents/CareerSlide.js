import React from 'react';

import Built from '../../img/built.svg';
import GraduationCap from '../../img/college.svg';

const CareerSlide = props => {
  const { prev, next } = props;

  return (
    <div className="div-about-carousel-career-slide">
      <div className="div-carousel-buttons">
        <button className="forward" onClick={prev}>&lt;</button>
        <button className="backward" onClick={next}>&gt;</button>
      </div>
      <h1>Career</h1>
      <div>
        <h2>Experience</h2>
        <div className="section">
            <div className="built"><img src={Built} alt="graduation" /></div>
          <ul>
            <li>Built
              <ul>
                <li><span>Automation</span> framework for testing embedded devices</li>
                <li><span>Server/Rack/Farm</span> for hundreds of embedded devices</li>
                <li><span>Execution scripts</span> (with GUI) for IT of fortune 500 companies</li>
                <li><span>Applications</span> (with GUI) coded with OOP principles</li>
                <li><span>Websites</span> (both front-end and back-end) saving the company millions</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>Positions Held<div className="graduation-cap"><img src={GraduationCap} alt="graduation" /></div>
              <ul>
                <li>Martial Arts Instructor</li>
                <li>IT Administrator</li>
                <li>QA Tester</li>
                <li>Test Technician</li>
                <li>Systems Engineer</li>
                <li>Powershell Scripter</li>
                <li>Senior Software Developer</li>
                <li>Team Lead</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Acedemic Achievements</h2>
        <div className="section">
          <ul>
            <li>College<img src={GraduationCap} alt="graduation" className="graduation-cap" width="65" height="65" />
              <ul>
                <li>4.0 GPA</li>
                <li>Valedictorian (x2 - San Bernardino and San Diego)</li>
                <li>Perfect Attendance (4 years)</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>Coding Bootcamp
              <ul>
                <li>6 months of all weeks with highest score</li>
                <li>Hired as a Team Lead for the next cohort</li>
                <li>Over 80 projects completed in Full Stack Web</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CareerSlide;