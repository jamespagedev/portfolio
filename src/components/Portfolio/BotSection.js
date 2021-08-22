import React from 'react';
import styled from 'styled-components';

// globals
import { rWidths, Colors } from '../../globals/CssMixins.js';

// components
import ContactForm from '../ContactForm.js';

//============================================ styles =============================================
const SectionBot = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  background-color: ${Colors.Vulcan};
  color: white;
  border-bottom: 0.4rem solid ${Colors.TurquoiseBlue};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${Colors.Vulcan};
    z-index: 2;
    clip-path: polygon(0% 100%, 55.5% 100%, 55.5% 0%, 0% 0%);

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
    clip-path: polygon(0% 100%, 56% 100%, 56% 0%, 0% 0%);

    @media (max-width: ${rWidths.phone}) {
      display: none
    }
  }

  @media (max-width: ${rWidths.phone}) {
    flex-direction: column;
    border-bottom: none;
  }
`;

//-------------------------------------------- contact --------------------------------------------
const DivContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  z-index: 3;
  padding: 4rem 0;

  @media (max-width: 2100px) {
    padding: 2rem 0;
  }

  @media (max-width: ${rWidths.phone}) {
    width: 100%;
    border-bottom: 0.4rem solid ${Colors.TurquoiseBlue};
  }
`;

const H2ContactTitle = styled.div`
  width: 90%;
  margin-bottom: 17rem;
  font-size: 7rem;
  font-weight: lighter;

  @media (max-width: 3600px) {
    font-size: 6.5rem;
    margin-bottom: 14rem;
  }

  @media (max-width: 3400px) {
    font-size: 6rem;
  }

  @media (max-width: 3300px) {
    font-size: 5.5rem;
    margin-bottom: 12rem;
  }

  @media (max-width: 3200px) {
    font-size: 5rem;
    margin-bottom: 11rem;
  }

  @media (max-width: 3100px) {
    font-size: 4.5rem;
    margin-bottom: 10rem;
  }

  @media (max-width: 2800px) {
    font-size: 4.2rem;
    margin-bottom: 9rem;
  }

  @media (max-width: 2700px) {
    width: 81%;
    margin-bottom: 8rem;
  }

  @media (max-width: 2500px) {
    font-size: 3.9rem;
    margin-bottom: 7rem;
  }

  @media (max-width: 2400px) {
    font-size: 3.7rem;
  }

  @media (max-width: 2300px) {
    margin-bottom: 6rem;
  }

  @media (max-width: 2200px) {
    font-size: 3.3rem;
  }

  @media (max-width: 2000px) {
    font-size: 3.1rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 1600px) {
    font-size: 2.8rem;
  }

  @media (max-width: ${rWidths.phone}) {
    font-size: 3.2rem;
    margin-bottom: 6rem;
    width: 83%;
  }

  @media (max-width: 800px) {
    font-size: 2.8rem;
    margin-bottom: 6rem;
  }

  @media (max-width: 700px) {
    font-size: 2.6rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 400px) {
    width: 81%;
  }
`;

//----------------------------------------- social media ------------------------------------------
const DivSocialMediaSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;

  @media (max-width:${rWidths.phone}) {
    display: none;
  }
`;

const DivSocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  margin-left: 5rem;
`;

const DivLinkedin = styled.div`
  display: block;
  width: 100%;
  border-top: 0.4rem solid ${Colors.Malibu};
  border-bottom: 0.4rem solid ${Colors.Malibu};
`;

const ALinkedIn = styled.a`
  display: block;
  width: 100%;
  cursor: pointer;
  text-align: center;

  &:hover {
    opacity: 0.7;
  }
`;

const ImgLinkedIn = styled.img`
  align-self: center;
  width: 50%;
  padding: 4rem 0;
`;

const DivGithub = styled.div`
  display: block;
  width: 100%;
  border-bottom: 0.4rem solid ${Colors.Malibu};
`;

//=========================================== component ===========================================
const BotSection = props => {
  return (
    <SectionBot id="contact">
      <DivContactSection>
        {/* <H2ContactTitle>Looking to gain a position where I can use my dev skills to build great software. Lets chat... </H2ContactTitle> */}
        <H2ContactTitle>I'm interesting in hearing about career opportunities. Please send me your contact info and I will get back to you.</H2ContactTitle>
        <ContactForm {...props} />
      </DivContactSection>
      <DivSocialMediaSection>
        <DivSocialMediaContainer>
          <DivLinkedin>
            <ALinkedIn href='https://www.linkedin.com/in/james-page-94a1923b' target='_blank' rel="noopener noreferrer">
              <ImgLinkedIn src={require('../../assets/img/linkedindesktop.svg')} alt='linkedin-desktop' />
            </ALinkedIn>
          </DivLinkedin>
          <DivGithub>
            <ALinkedIn href='https://github.com/jamespagedev' target='_blank' rel="noopener noreferrer">
              <ImgLinkedIn src={require('../../assets/img/githubdesktop.svg')} alt='linkedin-desktop' />
            </ALinkedIn>
          </DivGithub>
        </DivSocialMediaContainer>
      </DivSocialMediaSection>
    </SectionBot>
  );
};

export default BotSection;