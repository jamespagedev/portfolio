import React from 'react';
import styled from 'styled-components';

// components
import TabletHamburgerDropdown from './TabletHamburgerDropdown.js';
import PhoneHamburgerDropdown from './PhoneHamburgerDropdown.js';
import ContactSendPending from './ContactSendPending.js';
import ContactSendSuccess from './ContactSendSuccess.js';
import ContactSendFailure from './ContactSendFailure.js';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  position: fixed;
  top: ${props => props.modalFullSize === 'true' ? '0' : '8rem'};
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: ${props => props.modalOpen === 'true' ? '100%' : '0'};
  background-color: rgba(0, 0, 0, 0.8);
  z-index: ${props => props.modalFullSize === 'true' ? '6000' : '4000'};
  transition: ${props => props.hamburgeropen === 'true' ? 'max-height 0.3s ease-in-out' : 'max-height 0s ease-in-out'};
`;

//=========================================== component ===========================================
const Modals = props => {
  return (
    <DivWrapper modalOpen={props.modalOpen.toString()} modalFullSize={props.modalFullSize.toString()} hamburgeropen={props.hamburgerOpen.toString()} onClick={ev => props.closeModalOnBackground(ev)}>
      <TabletHamburgerDropdown modalFullSize={props.modalFullSize.toString()} hamburgeropen={props.hamburgerOpen} setHamburgerMenu={props.setHamburgerMenu}/>
      <PhoneHamburgerDropdown modalFullSize={props.modalFullSize.toString()} hamburgeropen={props.hamburgerOpen} setHamburgerMenu={props.setHamburgerMenu}/>
      <ContactSendPending pending={(props.contactModalType === props.contactModalTypes.pending)} />
      <ContactSendSuccess success={(props.contactModalType === props.contactModalTypes.success)} contactSuccessModalButton={props.contactSuccessModalButton} />
      <ContactSendFailure failure={(props.contactModalType === props.contactModalTypes.failure)} contactFailureModalButton={props.contactFailureModalButton} contactError={props.contactError} />
    </DivWrapper>
  );
};

export default Modals;