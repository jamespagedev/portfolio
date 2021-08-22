import React from 'react';
import styled from 'styled-components';

// globals
import { rWidths } from '../../globals/CssMixins.js';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: ${props => props.pending === 'true' ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: calc(50% - 30rem);
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30%;
  z-index: 4005;

  @media(max-width: ${rWidths.phone}){
    top: 0;
    height: 100%;
  }
`;

const DivMessage = styled.div`
  width: 26%;
  background: white;
  border-radius: 15px;
  padding: 4rem;

  @media(max-width: 3500px){
  }

@media(max-width: 3400px){
}

@media(max-width: 3300px){
  width: 24%;
}

@media(max-width: 3200px){
}

@media(max-width: 3100px){
}

@media(max-width: 3000px){
  padding: 3rem;
}

@media(max-width: 2900px){
}

@media(max-width: 2800px){
}

@media(max-width: 2700px){
}

@media(max-width: 2600px){
}

@media(max-width: 2500px){
}

@media(max-width: 2400px){
}

@media(max-width: 2300px){
}

@media(max-width: 2200px){
}

@media(max-width: 2100px){
}

@media(max-width: 2000px){
  padding: 2rem;
  width: 23%;
}

@media(max-width: 1900px){
}

@media(max-width: 1800px){
  width: 24%;
}

@media(max-width: 1700px){
  width: 26%;
}

@media(max-width: 1600px){
}

@media(max-width: 1500px){
  width: 27%;
}

@media(max-width: 1400px){
  width: 28%;
}

@media(max-width: 1300px){
  width: 30%;
}

@media(max-width: ${rWidths.tablet}){
  width: 34%;
}

@media(max-width: 1100px){
  width: 38%;
}

@media(max-width: 1000px){
  width: 42%;
}

@media(max-width: ${rWidths.phone}){
  width: 100%;
  border-radius: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`;

const H1Message = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 7rem;

@media(max-width: 3600px){
  font-size: 6.5rem;
}

@media(max-width: 3500px){
  font-size: 6.25rem;
}

@media(max-width: 3400px){
font-size: 6rem;
}

@media(max-width: 3300px){
font-size: 5.5rem;
}

@media(max-width: 3200px){
font-size: 5rem;
}

@media(max-width: 3100px){
font-size: 4.5rem;
}

@media(max-width: 3000px){
font-size: 4.4rem;
}

@media(max-width: 2900px){
font-size: 4.3rem;
}

@media(max-width: 2800px){
font-size: 4.2rem;
}

@media(max-width: 2700px){
}

@media(max-width: 2600px){
}

@media(max-width: 2500px){
font-size: 3.9rem;
}

@media(max-width: 2400px){
font-size: 3.7rem;
}

@media(max-width: 2300px){
}

@media(max-width: 2200px){
font-size: 3.3rem;
}

@media(max-width: 2100px){
}

@media(max-width: 2000px){
font-size: 3.1rem;
}

@media(max-width: 1900px){
}

@media(max-width: 1800px){
}

@media(max-width: 1700px){
}

@media(max-width: 1600px){
font-size: 2.8rem;
}

@media(max-width: 1500px){
}

@media(max-width: 1400px){
}

@media(max-width: 1300px){
}

@media(max-width: ${rWidths.tablet}){
}

@media(max-width: 1100px){
}

@media(max-width: 1000px){
}

@media(max-width: ${rWidths.phone}){
  font-size: 3.2rem;
}

@media (max-width: 800px) {
  font-size: 2.8rem;
}

@media (max-width: 700px) {
  font-size: 2.6rem;
}

@media (max-width: 600px) {
  font-size: 2rem;
}

@media (max-width: 400px) {
}
`;

const ImgSpinner = styled.img`
  width: 13%;
  height: 26%;

  @media(max-width: ${rWidths.phone}){
    height: 80%;
  }
`;

const DivSpinner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 11rem 0;

@media(max-width: 3200px){
  margin: 9rem 0;
}

@media(max-width: 3000px){
  margin: 8rem 0;
}

@media(max-width: 2700px){
  margin: 7rem 0;
}

@media(max-width: 2400px){
  margin: 6rem 0;
}

@media(max-width: 1900px){
  margin: 5rem 0;
}
`;

//=========================================== component ===========================================
const ContactSendPending = props => {
  return (
    <DivWrapper pending={props.pending.toString()}>
      <DivMessage>
        <H1Message>message sending...</H1Message>
        <DivSpinner>
          <ImgSpinner src={require('../../assets/img/spinner.gif')}></ImgSpinner>
        </DivSpinner>
      </DivMessage>
    </DivWrapper>
  );
};

export default ContactSendPending;