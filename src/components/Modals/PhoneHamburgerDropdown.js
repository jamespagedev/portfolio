import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// globals
import { rWidths, Colors } from '../../globals/CssMixins.js';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: none;
  width: 100%;
  background: ${Colors.Woodsmoke2};
  z-index: 4001;

  @media(max-width: ${rWidths.phone}) {
    display: ${props => props.nothamburger === 'true' ? 'none' : 'flex'};
    position: fixed;
    top: ${props => props.hamburgeropen === 'true' ? '8rem' : '-40rem'};
    transition: all 0.3s ease-in-out;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${props => props.hamburgeropen === 'true' ? '1' : '0'};
  transition: display 0.5s ease-in-out;
`;

const LinkNavItem = styled(Link)`
  padding: 2rem;
  border-bottom: 0.2rem solid ${Colors.TurquoiseBlue};
  color: white;
  font-size: 2.8rem;
  user-select: none;
  cursor: pointer;
  pointer-events: ${props => props.hamburgeropen === 'true' ? 'auto' : 'none'};

  &.active {
    color: ${Colors.Malibu};
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;

//=========================================== component ===========================================
const PhoneHamburgerDropdown = props => {
  return (
    <DivWrapper onClick={ev => ev.stopPropagation()} nothamburger={props.modalFullSize.toString()} hamburgeropen={props.hamburgeropen.toString()}>
      <Nav hamburgeropen={props.hamburgeropen.toString()}>
        <LinkNavItem
          hamburgeropen={props.hamburgeropen.toString()}
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`home-phone`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          HOME
        </LinkNavItem>
        <LinkNavItem
          hamburgeropen={props.hamburgeropen.toString()}
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`skills`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          SKILLS
        </LinkNavItem>
        <LinkNavItem
          hamburgeropen={props.hamburgeropen.toString()}
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`projects`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          PROJECTS
        </LinkNavItem>
        <LinkNavItem
          hamburgeropen={props.hamburgeropen.toString()}
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`resumes`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          RESUMES
        </LinkNavItem>
        <LinkNavItem
          hamburgeropen={props.hamburgeropen.toString()}
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`contact`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          CONTACT
        </LinkNavItem>
      </Nav>
    </DivWrapper>
  );
};

export default PhoneHamburgerDropdown;