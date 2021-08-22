import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// globals
import { rWidths, Colors } from '../../globals/CssMixins.js';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: ${props => props.nothamburger === 'true' ? 'none' : 'flex'};
  width: 100%;
  background: ${Colors.Woodsmoke2};
  z-index: 4001;

  @media(max-width: ${rWidths.tablet}) {
    position: fixed;
    top: ${props => props.hamburgeropen === 'true' ? '8rem' : '-24rem'};
    transition: all 0.3s ease-in-out;
  }

  @media(max-width: ${rWidths.phone}) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4rem 0;
  opacity: ${props => props.hamburgeropen === 'true' ? '1' : '0'};
  transition: display 0.5s ease-in-out;
`;

const LinkNavItem = styled(Link)`
  color: white;
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
  pointer-events: ${props => props.hamburgeropen === 'true' ? 'auto' : 'none'};
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &.active {
    color: ${Colors.Malibu};
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;

//=========================================== component ===========================================
const TabletHamburgerDropdown = props => {
  return (
    <DivWrapper onClick={ev => ev.stopPropagation()} nothamburger={props.modalFullSize.toString()} hamburgeropen={props.hamburgeropen.toString()}>
      <Nav hamburgeropen={props.hamburgeropen.toString()}>
        <LinkNavItem
          hamburgeropen={props.hamburgeropen.toString()}
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`home`}
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
          to={`work`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          WORK
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

export default TabletHamburgerDropdown;