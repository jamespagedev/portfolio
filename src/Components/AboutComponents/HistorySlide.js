import React, { useState } from 'react';

import GraduationCap from '../../img/college.svg';

const HistorySlide = () => {
  const [tabletTab, setTabletTab] = useState(1);
  const [phoneTab, setPhoneTab] = useState(1);
  return (
    <div className="div-about-carousel-history-slide">
      <div className="div-about-carousel-history-mobile-title-tabs">
        <button className={tabletTab === 1 ? "tablet-selected" : "tablet-unselected"} onClick={() => setTabletTab(1)}>Experience</button>
        <button className={tabletTab === 2 ? "tablet-selected" : "tablet-unselected"} onClick={() => setTabletTab(2)}>Acedemic Achievements</button>
      </div>
      <div className="div-about-carousel-history-phone-title-tabs">
        <div className="tab-row">
          <button className={phoneTab === 1 ? "btn-about-history-built phone-selected" : "btn-about-history-built phone-unselected"} onClick={() => setPhoneTab(1)}>Built</button>
          <button className={phoneTab === 2 ? "btn-about-history-position phone-selected" : "btn-about-history-position phone-unselected"} onClick={() => setPhoneTab(2)}>Positions Held</button>
        </div>
        <div className="tab-row">
          <button className={phoneTab === 3 ? "btn-about-history-college phone-selected" : "btn-about-history-college phone-unselected"} onClick={() => setPhoneTab(3)}><img src={GraduationCap} alt="college" />College</button>
          <button className={phoneTab === 4 ? "btn-about-history-coding phone-selected" : "btn-about-history-coding phone-unselected"} onClick={() => setPhoneTab(4)}>Coding Bootcamp</button>
        </div>
      </div>
      <div className="div-about-carousel-history-slide-content">
        <div className={tabletTab === 1 ? "row-container tablet-selected" : "row-container tablet-unselected"}>
          <h2>Experience</h2>
          <div className="row">
            <section className={phoneTab === 1 ? "section-phone-view phone-selected" : "section-phone-view phone-unselected"}>
              <h3 className="h3-about-history-built">Built</h3>
              <ul className="ul-about-history">
                <li><span>Automation</span> framework for testing embedded devices</li>
                <li><span>Server/Rack/Farm</span> for hundreds of embedded devices</li>
                <li><span>Execution scripts</span> (with GUI) for IT of fortune 500 companies</li>
                <li><span>Applications</span> (with GUI) coded with OOP principles</li>
                <li><span>Websites</span> (both front-end and back-end) saving the company millions</li>
              </ul>
            </section>
            <section className={phoneTab === 2 ? "section-phone-view phone-selected" : "section-phone-view phone-unselected"}>
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
            </section>
          </div>
        </div>
        <div className={tabletTab === 2 ? "row-container tablet-selected" : "row-container tablet-unselected"}>
          <h2>Acedemic Achievements</h2>
          <div className="row">
            <section className={phoneTab === 3 ? "section-phone-view phone-selected" : "section-phone-view phone-unselected"}>
              <h3 className="h3-about-history-college"><img src={GraduationCap} alt="college" />College</h3>
              <ul className="ul-about-history">
                <li>Valedictorian (x2 - San Bernardino and San Diego)</li>
                <li>4.0 GPA</li>
                <li>Perfect Attendance (4 years)</li>
              </ul>
            </section>
            <section className={phoneTab === 4 ? "section-phone-view phone-selected" : "section-phone-view phone-unselected"}>
              <h3 className="h3-about-history-coding">Coding Bootcamp</h3>
              <ul className="ul-about-history">
                <li>3/3 * weekly rating for full 6 month curriculum</li>
                <li>Hired as a Team Lead for the next cohort</li>
                <li>Over 80 projects completed in Full Stack Web</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistorySlide;