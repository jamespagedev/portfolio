import React from 'react';
import styled from 'styled-components';

// globals
import { rWidths, Colors } from '../../globals/CssMixins.js';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: ${props => props.failure === 'true' ? 'flex' : 'none'};
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

const PError = styled.p`
  font-size: 5rem;
  text-align: center;
  width: 100%;
  margin: 4rem 0;

@media(max-width: 3600px){
  font-size: 4.5rem;
}

@media(max-width: 3500px){
  font-size: 4.25rem;
}

@media(max-width: 3400px){
font-size: 4rem;
}

@media(max-width: 3300px){
}

@media(max-width: 3200px){
}

@media(max-width: 3100px){
}

@media(max-width: 3000px){
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
font-size: 3.6rem;
}

@media(max-width: 2400px){
font-size: 3.4rem;
}

@media(max-width: 2300px){
}

@media(max-width: 2200px){
font-size: 3rem;
}

@media(max-width: 2100px){
}

@media(max-width: 2000px){
font-size: 2.8rem;
}

@media(max-width: 1900px){
}

@media(max-width: 1800px){
}

@media(max-width: 1700px){
}

@media(max-width: 1600px){
font-size: 2.5rem;
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
`

const DivButton = styled.div`
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

const ButtonBack = styled.button`
  display: block;
  width: 35%;
  text-align: center;
  padding: 2rem 0;
  border-radius: 2rem;
  background-color: ${Colors.Alto};
  background: linear-gradient(to top, #dddddd, #ffffff);
  border-color: ${Colors.Alto};
  font-size: 6rem;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:active {
    background: linear-gradient(to top, #ffffff, #dddddd);
    text-decoration: none;
  }

  &:hover {
    font-weight: bold;

    @media (max-width: ${rWidths.tablet}) {
      font-weight: normal;
    }
  }

@media(max-width: 3600px){
  font-size: 5.6rem;
}

@media(max-width: 3500px){
}

@media(max-width: 3400px){
  font-size: 5.4rem;
}

@media(max-width: 3300px){
  font-size: 5.2rem;
  width: 37%;
}

@media(max-width: 3200px){
  font-size: 5rem;
}

@media(max-width: 3100px){
  font-size: 4.5rem;
}

@media(max-width: 3000px){
}

@media(max-width: 2900px){
  font-size: 4rem;
}

@media(max-width: 2800px){
  font-size: 3.7rem;
}

@media(max-width: 2700px){
}

@media(max-width: 2600px){
}

@media(max-width: 2500px){
  font-size: 3.4rem;
}

@media(max-width: 2400px){
  font-size: 3.2rem;
}

@media(max-width: 2300px){
}

@media(max-width: 2200px){
  font-size: 2.8rem;
}

@media(max-width: 2100px){
}

@media(max-width: 2000px){
  font-size: 2.6rem;
  width: 39%;
}

@media(max-width: 1900px){
  padding: 1rem 0;
  width: 34%;
}

@media (max-width: 1600px) {
  font-size: 2.4rem;
}

@media (max-width: 1500px) {
  width: 36%;
}

@media (max-width: 1400px) {
}

@media (max-width: 1300px) {
}

@media (max-width: ${rWidths.tablet}) {
}

@media (max-width: 1100px) {
}

@media (max-width: 1000px) {
}

@media (max-width: ${rWidths.phone}) {
  font-size: 3.2rem;
  padding: 1.5rem 0;
}

@media (max-width: 800px) {
  font-size: 2.8rem;
}

@media (max-width: 700px) {
  font-size: 2.4rem;
}

@media (max-width: 600px) {
  font-size: 1.8rem;
}

@media (max-width: 500px) {
  width: 40%;
}

@media (max-width: 450px) {
  width: 45%;
}

@media (max-width: 400px) {
  width: 50%;
}

@media (max-width: 350px) {
  padding: 1.2rem 0;
  width: 55%;
}
`

//=========================================== component ===========================================
const ContactSendFailure = props => {
  return (
    <DivWrapper failure={props.failure.toString()}>
      <DivMessage>
        <H1Message>message failed to send</H1Message>
        <PError>{props.contactError}</PError>
        <DivButton>
          <ButtonBack onClick={ev => props.contactFailureModalButton(ev)}>Back</ButtonBack>
        </DivButton>
      </DivMessage>
    </DivWrapper>
  );
};

export default ContactSendFailure;