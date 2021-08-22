import React from 'react';
import styled from 'styled-components';

// globals
import { rWidths, Colors } from '../globals/CssMixins.js';

//============================================ styles =============================================
const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10rem;
  background-color: ${Colors.darkerCodGray};

  @media(max-width: 3600px) {
    padding: 9.750rem;
  }

  @media(max-width: 3500px) {
    padding: 9.5rem;
  }

  @media(max-width: 3400px) {
    padding: 9.250rem;
  }

  @media(max-width: 3300px) {
    padding: 9rem;
  }

  @media(max-width: 3200px) {
    padding: 8.750rem;
  }

  @media(max-width: 3100px) {
    padding: 8.5rem;
  }

  @media(max-width: 3000px) {
    padding: 8.250rem;
  }

  @media(max-width: 2900px) {
    padding: 8rem;
  }

  @media(max-width: 2800px) {
    padding: 7.750rem;
  }

  @media(max-width: 2700px) {
    padding: 7.5rem;
  }

  @media(max-width: 2600px) {
    padding: 7.250rem;
  }

  @media(max-width: 2500px) {
    padding: 7rem;
  }

  @media(max-width: 2400px) {
    padding: 6.750rem;
  }

  @media(max-width: 2300px) {
    padding: 6.5rem;
  }

  @media(max-width: 2200px) {
    padding: 6.250rem;
  }

  @media(max-width: 2100px) {
    padding: 6rem;
  }

  @media(max-width: 2000px) {
    padding: 5.750rem;
  }

  @media(max-width: 1900px) {
    padding: 5.5rem;
  }

  @media(max-width: 1800px) {
    padding: 5.250rem;
  }

  @media(max-width: 1700px) {
    padding: 5rem;
  }

  @media(max-width: 1600px) {
    padding: 4.750rem;
  }

  @media(max-width: 1500px) {
    padding: 4.5rem;
  }

  @media(max-width: 1400px) {
    padding: 4.250rem;
  }

  @media(max-width: 1300px) {
    padding: 4rem;
  }

  @media(max-width: ${rWidths.tablet}) {
    padding: 3.850rem;
  }

  @media(max-width: 1100px) {
    padding: 3.7rem;
  }

  @media(max-width: 1000px) {
    padding: 3.6rem;
  }

  @media(max-width: ${rWidths.phone}) {
    padding: 1.8rem 3.6rem 3.6rem 3.6rem;
  }
`;

const PSignature = styled.p`
  width: 100%;
  color: white;
  text-align: center;
  font-size: 3rem;

  @media(max-width: 3300px) {
    font-size: 2.8rem;
  }

  @media(max-width: 3000px) {
    font-size: 2.6rem;
  }

  @media(max-width: 2700px) {
    font-size: 2.4rem;
  }

  @media(max-width: 2400px) {
    font-size: 2.2rem;
  }

  @media(max-width: 2100px) {
    font-size: 2rem;
  }

  @media(max-width: 1800px) {
    font-size: 1.8rem;
  }

  @media(max-width: 1400px) {
    font-size: 1.6rem;
  }

  @media(max-width: 1000px) {
    font-size: 1.4rem;
  }
`;

const DivSocialMediaButtons = styled.div`
  display: none;

  @media(max-width: ${rWidths.phone}) {
    display: flex;
    align-self: center;
    justify-content: space-evenly;
    width: 27%;
    padding-bottom: 1.8rem;
  }

  @media(max-width: 800px) {
    width: 31%;
  }

  @media(max-width: 700px) {
    width: 35.5%;
  }

  @media(max-width: 600px) {
    width: 42%;
  }

  @media(max-width: 500px) {
    width: 52%;
  }

  @media(max-width: 400px) {
    width: 68%;
  }
`;

//=========================================== component ===========================================
const Footer = () => {
  return (
    <DivFooter>
      <DivSocialMediaButtons>
        <a href='https://www.linkedin.com/in/james-page-94a1923b' target='_blank' rel="noopener noreferrer">
          <img src={require('../assets/img/linkedinphone.svg')} alt='linkedin-phone' />
        </a>
        <a href='https://github.com/jamespagedev' target='_blank' rel="noopener noreferrer">
          <img src={require('../assets/img/githubphone.svg')} alt='linkedin-phone' />
        </a>
      </DivSocialMediaButtons>
      <PSignature>©&nbsp;Copyright&nbsp;James&nbsp;C.&nbsp;Page&nbsp;2019</PSignature>
    </DivFooter>
  );
};

export default Footer;