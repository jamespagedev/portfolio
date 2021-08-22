import React from 'react';
import styled from 'styled-components';

// globals
import { rWidths, Colors } from '../../globals/CssMixins.js';

// components
import DesktopNav from './DesktopNav.js';
import Hamburger from './Hamburger.js'

// images
import myFaceImgImg from '../../assets/img/myFace.png';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 8rem;
  margin: 0;
  border-bottom: 0.4rem solid ${Colors.TurquoiseBlue};
  background-color: ${Colors.Vulcan};
  z-index: 5000;
`;

const DivImgName= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24%;

  @media (max-width: 2500px) {
    width: 25%;
  }

  @media (max-width: 2200px) {
    width: 26%;
  }

  @media (max-width: 2100px) {
    width: 28%;
  }

  @media (max-width: 2000px) {
    width: 29%;
  }

  @media (max-width: 1900px) {
    width: 30%;
  }

  @media (max-width: 1800px) {
    width: 33%;
  }

  @media (max-width: 1700px) {
    width: 35%;
  }

  @media (max-width: 1600px) {
    width: 36%;
  }

  @media (max-width: 1500px) {
    width: 37%;
  }

  @media (max-width: 1400px) {
    width: 38%;
  }

  @media (max-width: 1300px) {
    width: 39.5%;
  }

  @media (max-width: ${rWidths.tablet}) {
    width: 35rem;
    margin-left: 3.5rem;
  }

  @media (max-width: ${rWidths.phone}) {
    width: 35rem;
    margin-left: 1.5rem;
  }

  @media (max-width: 500px) {
    width: 28rem;
  }

  @media (max-width: 380px) {
    width: 23rem;
    margin-left: 1.4rem;
  }
`;

const ImgFace = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 1.5rem;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: none;

  @media (max-width: 380px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

const H1Logo = styled.h1`
  padding: 0 0 1rem 2rem;
  user-select: none;
  color: ${Colors.Malibu};
  font-weight: bold;
  font-size: 5rem;

  @media (max-width: ${rWidths.tablet}) {
    font-size: 4rem;
  }

  @media (max-width: 500px) {
    font-size: 3rem;
    padding: 0 0 0.5rem 1rem;
  }

  @media (max-width: 380px) {
    font-size: 2.6rem;
    padding: 0 0 0.5rem 0.5rem;
  }
`;

//=========================================== component ===========================================
const MainHeader = props => {
  return (
    <DivWrapper>
      <DivImgName>
        <ImgFace src={`${myFaceImgImg}`} draggable="false" alt='' />
        <H1Logo>James&nbsp;C.&nbsp;Page</H1Logo>
      </DivImgName>
      <DesktopNav {...props} />
      <Hamburger {...props} />
    </DivWrapper>
  );
};

export default MainHeader;
