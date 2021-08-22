import React from 'react';
import styled from 'styled-components';

// globals
import { rWidths, Colors } from '../../globals/CssMixins.js';

// components
import CarouselEducation from '../Carousel/CarouselEducation.js';

//============================================ styles =============================================
const SectionTop = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  background-color: ${Colors.RegalBLue};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: -0.2rem;
    left: 0;
    right: 0;
    background-color: ${Colors.CongressBlue};
    z-index: 2;
    clip-path: polygon(0% 100%, 44.5% 100%, 55.5% 0%, 0% 0%);

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
    clip-path: polygon(0% 100%, 45% 100%, 56% 0%, 0% 0%);

    @media (max-width: ${rWidths.phone}) {
      display: none
    }
  }

  @media (max-width: ${rWidths.phone}) {
    flex-direction: column;
  }
`;

//--------------------------------------------- intro ---------------------------------------------
const DivIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 50%;
  padding: 7rem 0 0 3.5rem;
  z-index: 3;

  @media (max-width: ${rWidths.phone}) {
    justify-content: flex-start;
    width: 100%;
    padding: 3rem 2.5rem;
    border-bottom: 0.4rem solid ${Colors.TurquoiseBlue};
  }

  @media (max-width: ${rWidths.phone}) {
    padding: 1rem 2.5rem;
  }
`;

const H3Intro = styled.h3`
  width: 100%;
  margin-top: 3rem;
  text-align: center;
  font-size: 6rem;
  line-height: 1.7;
  color: white;

  @media (max-width: 3600px) {
    font-size: 5rem;
  }

  @media (max-width: 3200px) {
    font-size: 4rem;
  }

  @media (max-width: 2600px) {
    font-size: 3.2rem
  }

  @media (max-width: 2400px) {
    padding-right: 1rem;
  }

  @media (max-width: 1800px) {
    font-size: 3rem;
  }

  @media (max-width: 1700px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1450px) {
    font-size: 2.2rem;
  }

  @media (max-width: ${rWidths.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media (max-width: ${rWidths.phone}) {
    margin: 0;
    padding: 0;
  }
`;

const PDetail = styled.p`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
  font-size: 6rem;
  font-weight: bold;
  line-height: 1.7;
  color: white;

  @media (max-width: 3600px) {
    font-size: 5rem;
  }

  @media (max-width: 3200px) {
    font-size: 4rem;
  }

  @media (max-width: 2600px) {
    font-size: 3.2rem
  }

  @media (max-width: 2400px) {
  padding-right: ${props => props.currentfocus ? '1.2rem': props.exploring ? '1.35rem' : '1.5rem'};
  }

  @media (max-width: 1800px) {
    font-size: 3rem;
  }

  @media (max-width: 1700px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1450px) {
    font-size: 2.2rem;
  }

  @media (max-width: ${rWidths.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media (max-width: ${rWidths.phone}) {
    padding: 0;
  }

  span {
    font-weight: normal;
    padding-left: 6rem;

    @media (max-width: ${rWidths.phone}) {
      padding-left: 3rem;
    }
  }
`;

//-------------------------------------------- skills ---------------------------------------------
const DivSkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  padding: 3.5rem 7.5rem 3.5rem 6rem;

  @media (max-width: 1900px) {
    padding: 3.5rem 5rem 3.5rem 1.4rem;
  }

  @media (max-width: ${rWidths.phone}) {
    width: 100%;
    justify-content: center;
    clip-path: none;
    padding: 3.5rem 2.5rem 0;
    border-bottom: 0.4rem solid ${Colors.TurquoiseBlue};
  }

  @media (max-width: 500px) {
    padding: 2rem 2.5rem 0;
  }
`;

const H1Skills = styled.h1`
  margin-bottom: 3.5rem;
  padding-left: 18rem;
  font-size: 7rem;
  align-self: center;
  color: white;
  user-select: none;

  @media (max-width: 2600px) {
    font-size: 7rem;
  }

  @media (max-width: 2100px) {
    font-size: 5rem;
  }

  @media (max-width: 1800px) {
    font-size: 5rem;
    padding-left: 16rem;
  }

  @media (max-width: 1300px) {
    font-size: 4rem;
    padding-left: 14rem;
  }

  @media (max-width: ${rWidths.phone}) {
    padding: 0;
  }

  @media (max-width: 500px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const DivSkillsSectionCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: ${props => props.size === 'small' ? '80%' : props.size === 'medium' ? '90%' : '100%' };
  margin-bottom: 7rem;
  padding: ${props => props.bot === 'true' ? '5rem 2rem' : '2rem'};
  background: white;
  border-radius: 1.5rem;

  @media (max-width: 1900px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 1100px) {
    padding: ${props => props.bot === 'true' ? '4rem 0' : '2rem 0'};
  }

  @media (max-width: ${rWidths.phone}) {
    width: 100%;
    padding: 2rem;
    margin-bottom: 2.5rem;
  }
`;

const ImgSkill = styled.img`
  width: 30%;
  padding: ${props => props.top === 'true' ? '4.5rem 11rem 3rem' : '3rem 11rem 4.5rem'};
  margin-bottom: ${props => props.mb === 'true' ? '3rem' : '0'};

  @media (max-width: 3200px) {
    padding: ${props => props.top === 'true' ? '3rem 8rem 1.5rem' : '1.5rem 8rem 3rem'};
  }

  @media (max-width: 2600px) {
    padding: ${props => props.top === 'true' ? '3rem 7rem 1.5rem' : '1.5rem 7rem 3rem'};
  }

  @media (max-width: 2300px) {
    padding: ${props => props.top === 'true' ? '3rem 6rem 1.5rem' : '1.5rem 6rem 3rem'};
  }

  @media (max-width: 2200px) {
    padding: ${props => props.top === 'true' ? '3rem 5rem 1.5rem' : '1.5rem 5rem 3rem'};
  }

  @media (max-width: 2000px) {
    padding: ${props => props.top === 'true' ? '3rem 4rem 1.5rem' : '1.5rem 4rem 3rem'};
  }

  @media (max-width: 1700px) {
    padding: ${props => props.top === 'true' ? '2rem 3rem 1rem' : '1rem 3rem 2rem'};
  }

  @media (max-width: 1450px) {
    padding: ${props => props.top === 'true' ? '2rem 2rem 1rem' : '1rem 2rem 2rem'};
  }

  @media (max-width: ${rWidths.tablet}) {
    padding: ${props => props.top === 'true' ? '1rem 1rem 0.5rem' : '0.5rem 1rem 1rem'};
    margin-bottom: ${props => props.mb === 'true' ? '6rem' : '0'};
  }

  @media (max-width: ${rWidths.phone}) {
    margin-bottom: ${props => props.mb === 'true' ? '3rem' : '0'};
  }
`;

//=========================================== component ===========================================
const TopSection = props => {
  return (
    <SectionTop id="home">
      <DivIntro id="home-phone">
        <H3Intro>Greetings, thank you for taking the time to visit my portfolio. I'm a full stack developer who enjoys working in all areas.</H3Intro>
        <hr style={{width: '76%', height: '0.3rem', backgroundColor: 'white', margin: '3rem 0 4.5rem'}} />
        <PDetail currentfocus>Current focus:<span>JavaScript, React/Redux, styled-components, nodeJS, express, knex</span></PDetail>
        <PDetail exploring>Exploring:<span>django, AWS, docker</span></PDetail>
        <PDetail eventually>Eventually:<span>graphql, C#, ruby on rails, golang, gatsbyjs, sass, socket.io, flutter, hooks(react), feathers.js, goat, oauth2, jenkins, joi, dia, figma, pusher</span></PDetail>
        <PDetail education>Education:<span>Valedictorian, 4.0GPA, Perfect&nbsp;Attendance</span></PDetail>
        <CarouselEducation />
      </DivIntro>
      <DivSkillsSection id="skills">
        <H1Skills>Skills</H1Skills>
        <DivSkillsSectionCategory size='small'>
          <ImgSkill top='true' src={require('../../assets/img/javascript.svg')} draggable="false" alt='javascript' />
          <ImgSkill top='true' src={require('../../assets/img/java.svg')} draggable="false" alt='java' />
          <ImgSkill top='true' src={require('../../assets/img/python.svg')} draggable="false" alt='python' />
          <ImgSkill bottom='true' src={require('../../assets/img/c.svg')} draggable="false" alt='c' />
          <ImgSkill bottom='true' src={require('../../assets/img/powershell.svg')} draggable="false" alt='powershell' />
          <ImgSkill bottom='true' src={require('../../assets/img/cpp.svg')} draggable="false" alt='cpp' />
        </DivSkillsSectionCategory>
        <DivSkillsSectionCategory size='medium'>
          <ImgSkill top='true' src={require('../../assets/img/html5.svg')} draggable="false" alt='html5' />
          <ImgSkill top='true' src={require('../../assets/img/less.svg')} draggable="false" alt='less' />
          <ImgSkill top='true' src={require('../../assets/img/css.svg')} draggable="false" alt='css' />
          <ImgSkill bottom='true' src={require('../../assets/img/react.svg')} draggable="false" alt='react' />
          <ImgSkill bottom='true' src={require('../../assets/img/axios.svg')} draggable="false" alt='axios' />
          <ImgSkill bottom='true' src={require('../../assets/img/redux.svg')} draggable="false" alt='redux' />
        </DivSkillsSectionCategory>
        <DivSkillsSectionCategory bot="true" size='large'>
          <ImgSkill top='true' mb="true" src={require('../../assets/img/express.svg')} draggable="false" alt='express' />
          <ImgSkill top='true' mb="true" src={require('../../assets/img/nodejs.svg')} draggable="false" alt='nodejs' />
          <ImgSkill top='true' mb="true" src={require('../../assets/img/knex.svg')} draggable="false" alt='knex' />
          <ImgSkill bottom='true' src={require('../../assets/img/postgresql.svg')} draggable="false" alt='postgresql' />
          <ImgSkill bottom='true' src={require('../../assets/img/StripeBlue.svg')} draggable="false" alt='stripe' />
          <ImgSkill bottom='true' src={require('../../assets/img/restfulapi.svg')} draggable="false" alt='restfulapi' />
        </DivSkillsSectionCategory>
      </DivSkillsSection>
    </SectionTop>
  );
};

export default TopSection;