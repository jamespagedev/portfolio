import React from 'react';

import GraduationCap from '../../img/college.svg';

const HistorySlide = props => {
  const { prev, next } = props;

  return (
    <div className="div-about-carousel-history-slide">
      <div className="div-carousel-buttons">
        <button className="forward" onClick={prev}>&lt;</button>
        <button className="backward" onClick={next}>&gt;</button>
      </div>
      <h1>History</h1>
      <div>
        <h2>Experience</h2>
        <div className="row">
          <div>
            <h3 className="h3-about-history-built">Built</h3>
            <ul className="ul-about-history">
              <li><span>Automation</span> framework for testing embedded devices</li>
              <li><span>Server/Rack/Farm</span> for hundreds of embedded devices</li>
              <li><span>Execution scripts</span> (with GUI) for IT of fortune 500 companies</li>
              <li><span>Applications</span> (with GUI) coded with OOP principles</li>
              <li><span>Websites</span> (both front-end and back-end) saving the company millions</li>
            </ul>
          </div>
          <div>
            <h3 className="h3-about-history-position">Positions Held</h3>
            <ul className="ul-about-history">
              <li>Martial Arts Instructor</li>
              <li>IT Administrator</li>
              <li>QA Tester</li>
              <li>Test Technician</li>
              <li>Systems Engineer</li>
              <li>Powershell Scripter</li>
              <li>Senior Software Developer</li>
              <li>Team Lead</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2>Acedemic Achievements</h2>
        <div className="row">
          <div>
            <h3 className="h3-about-history-college"><img src={GraduationCap} alt="college" />College</h3>
            <ul className="ul-about-history">
              <li>Valedictorian (x2 - San Bernardino and San Diego)</li>
              <li>4.0 GPA</li>
              <li>Perfect Attendance (4 years)</li>
            </ul>
          </div>
          <div>
            <h3 className="h3-about-history-coding">Coding Bootcamp</h3>
            <ul className="ul-about-history">
              <li>3/3 * weekly rating for full 6 month curriculum</li>
              <li>Hired as a Team Lead for the next cohort</li>
              <li>Over 80 projects completed in Full Stack Web</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistorySlide;