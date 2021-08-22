import React from 'react';
import styled from 'styled-components';

// globals
import { rWidths, Colors } from '../../globals/CssMixins.js';

// components
import Projects from '../Projects/Projects.js';
import Resumes from '../Resumes/Resumes.js';

//============================================ styles =============================================
const SectionMid = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  background-color: ${Colors.CongressBlue};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: -0.2rem;
    left: 0;
    right: 0;
    background-color: ${Colors.RegalBLue};
    z-index: 2;
    clip-path: polygon(0% 100%, 55.5% 100%, 44.5% 0%, 0% 0%);

    @media (max-width: ${rWidths.phone}) {
      display: none
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${Colors.TurquoiseBlue};
    z-index: 1;
    clip-path: polygon(0% 100%, 56% 100%, 45% 0%, 0% 0%);

    @media (max-width: ${rWidths.phone}) {
      display: none
    }
  }

  @media (max-width: ${rWidths.phone}) {
    flex-direction: column;
  }
`;

//------------------------------------------- projects --------------------------------------------
const DivProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  padding: 0 0 0 3.5rem;
  z-index: 3;

  @media (max-width: ${rWidths.phone}) {
    justify-content: center;
    width: 100%;
    padding: 0 2.5rem 0;
    border-bottom: 0.4rem solid ${Colors.TurquoiseBlue};
  }

  @media (max-width: 500px) {
    padding: 2rem 2.5rem 0;
  }
`;

const H1Projects = styled.h1`
  width: 87%;
  margin: 3.5rem 0;
  font-size: 9rem;
  text-align: center;
  color: white;
  user-select: none;

  @media (max-width: 2600px) {
    font-size: 7rem;
  }

  @media (max-width: 2100px) {
    font-size: 6rem;
  }

  @media (max-width: 1800px) {
    font-size: 5rem;
  }

  @media (max-width: 1300px) {
    font-size: 4rem;
  }

  @media (max-width: ${rWidths.phone}) {
    width: 100%;
  }

  @media (max-width: 500px) {
    font-size: 3rem;
    margin: 2rem 0;
  }
`;

//-------------------------------------------- resumes --------------------------------------------
const DivResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;

  @media (max-width: ${rWidths.phone}) {
    width: 100%;
    padding: 0 2.5rem 0;
    border-bottom: 0.4rem solid ${Colors.TurquoiseBlue};
  }

  @media (max-width: 500px) {
    padding: 2rem 2.5rem 0;
  }
`;

const H1Resumes = styled.h1`
  width: 95%;
  margin: 3.5rem 0;
  font-size: 9rem;
  text-align: center;
  color: white;
  user-select: none;

  @media (max-width: 2600px) {
    font-size: 7rem;
  }

  @media (max-width: 2100px) {
    font-size: 6rem;
  }

  @media (max-width: 1800px) {
    font-size: 5rem;
  }

  @media (max-width: 1300px) {
    font-size: 4rem;
  }

  @media (max-width: ${rWidths.phone}) {
    width: 100%;
  }

  @media (max-width: 500px) {
    font-size: 3rem;
    margin: 2rem 0;
  }
`;

const H4ClickToView = styled.h4`
  width: 95%;
  margin: 0 0 8.5rem;
  font-size: 4rem;
  text-align: center;
  color: white;
  user-select: none;

  @media (max-width: 3600px) {
    margin: 0 0 8rem;
  }

  @media (max-width: 3300px) {
    margin: 0 0 7.5rem;
  }

  @media (max-width: 3000px) {
    margin: 0 0 7rem;
  }

  @media (max-width: 2600px) {
    font-size: 3.2rem;
    margin: 0 0 6.5rem;
  }

  @media (max-width: 2100px) {
    font-size: 2.4rem;
    margin: 0 0 6rem;
  }

  @media (max-width: 1800px) {
    font-size: 2rem;
    margin: 0 0 5.5rem;
  }

  @media (max-width: 1500px) {
    margin: 0 0 5rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.4rem;
    margin: 0 0 4.5rem;
  }

  @media (max-width: 1100px) {
    margin: 0 0 4rem;
  }

  @media (max-width: ${rWidths.phone}) {
    width: 100%;
  }

  @media (max-width: 500px) {
    margin: 1rem 0 2rem;
  }
`;

//=========================================== component ===========================================
const MidSection = props => {
  return (
    <SectionMid id="work">
      <DivProjectSection id="projects">
        <H1Projects>Project(s)</H1Projects>
        <Projects />
      </DivProjectSection>
      <DivResumeSection id="resumes">
        <H1Resumes>Resume(s)</H1Resumes>
        <H4ClickToView>(click to view)</H4ClickToView>
        <Resumes />
      </DivResumeSection>
    </SectionMid>
  );
};

export default MidSection;