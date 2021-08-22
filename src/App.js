import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

// globals
import { Colors } from './globals/CssMixins';

// components
import MainHeader from './components/header/MainHeader';
import Modals from './components/Modals/Modals.js';
import PortfolioPage from './pageviews/PortfolioPage.js';
import Footer from './components/Footer.js';

// variables
const defaultContactData = {
  sendtype: 'portfolio',
  name: '',
  email: '',
  subject: '',
  message: ''
}

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body,
  #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: ${Colors.Vulcan};
    height: 100%;
    font-size: 62.5%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  img {
    width: 100%;
  }
`;

//=========================================== component ===========================================
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keepModalOpenOnClick: false,
      modalOpen: false,
      modalFullSize: false,
      hamburgerOpen: false,
      contactModalOpen: false,
      contactModalType: '',
      contactModalTypes: {
        pending: 'pending',
        success: 'success',
        failure: 'failure'
      },
      contactData: defaultContactData,
      contactError: ''
    };
  }

  closeModal = (ev) => {
    ev.preventDefault();
    this.setState({keepModalOpenOnClick: false, modalOpen: false, modalFullSize: false, hamburgerOpen: false, contactModalOpen: false, contactModalType: '', contactError: ''});
  }

  closeModalOnBackground = (ev) => {
    ev.preventDefault();
    (!this.state.keepModalOpenOnClick) && this.closeModal(ev);
  }

  setHamburgerMenu = (ev, status) => {
    ev.preventDefault();
    this.setState({modalOpen: status, modalFullSize: false, keepModalOpenOnClick: false, hamburgerOpen: status});
  }

  setContactMessageModal = (status, contactModalType, err='') => {
    this.setState({modalOpen: status, modalFullSize: true, keepModalOpenOnClick: true, contactModalOpen: status, contactModalType: contactModalType, contactError: err.toString()});
  }

  sendContact = (ev) => {
    ev.preventDefault();

    /* emails:
        http://localhost:5012/test-email/send
        http://localhost:5012/main-email/send
    */
    Promise.resolve(this.setContactMessageModal(true, this.state.contactModalTypes.pending))
      .then(() => 
        axios.post('https://jamespagedev-email-server.herokuapp.com/main-email/send', this.state.contactData)
          .then(res => {console.log(res); this.setContactMessageModal(true, this.state.contactModalTypes.success)})
          .catch(err => {console.log(err); this.setContactMessageModal(true, this.state.contactModalTypes.failure, err)})
      );
  }

  handleChange = ev => {
    ev.preventDefault();
    this.setState({contactData: {...this.state.contactData, [ev.target.name]: ev.target.value}}); // test this...
  }

  handleSend = ev => {
    ev.preventDefault();
    const contactData = this.state.contactData;
    // this.setContactMessageModal(true, 'pending');
    this.sendContact(ev, contactData);
  }

  handleClear = ev => {
    ev.preventDefault();
    this.setState({contactData: Object.assign({}, defaultContactData)})
  }

  contactSuccessModalButton = ev => {
    ev.preventDefault();
    Promise.resolve(this.handleClear(ev)).then(() => this.closeModal(ev));
  }

  contactFailureModalButton = ev => {
    ev.preventDefault();
    this.closeModal(ev);
  }

  render() {
    return (
      <DivWrapper>
        <GlobalStyle />
        <MainHeader hamburgerOpen={this.state.hamburgerOpen} setHamburgerMenu={this.setHamburgerMenu}/>
        <Modals
          modalOpen={this.state.modalOpen}
          modalFullSize={this.state.modalFullSize}
          contactModalType={this.state.contactModalType}
          contactModalTypes={this.state.contactModalTypes}
          hamburgerOpen={this.state.hamburgerOpen}
          setHamburgerMenu={this.setHamburgerMenu}
          closeModal={this.closeModal}
          closeModalOnBackground={this.closeModalOnBackground}
          contactSuccessModalButton={this.contactSuccessModalButton}
          contactFailureModalButton={this.contactFailureModalButton}
          contactError={this.state.contactError}
        />
        <PortfolioPage 
          setContactMessageModal={this.setContactMessageModal}
          sendContact={this.sendContact}
          handleChange={this.handleChange}
          handleSend={this.handleSend}
          handleClear={this.handleClear}
          contactData={this.state.contactData}
        />
        <Footer />
      </DivWrapper>
    );
  }
}

export default App;
