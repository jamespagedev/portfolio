import React from 'react';
import styled from 'styled-components';

// components
import TopSection from '../components/Portfolio/TopSection.js';
import MidSection from '../components/Portfolio/MidSection.js';
import BotSection from '../components/Portfolio/BotSection.js';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8rem;
`;

//=========================================== component ===========================================
const PortfolioPage = props => {
  return (
    <DivWrapper>
      <TopSection />
      <MidSection />
      <BotSection
        setContactMessageModal={props.setContactMessageModal}
        sendContact={props.sendContact}
        handleChange={props.handleChange}
        handleSend={props.handleSend}
        handleClear={props.handleClear}
        contactData={props.contactData}
      />
    </DivWrapper>
  );
};

export default PortfolioPage;