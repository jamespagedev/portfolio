import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// globals
import { rWidths, Colors } from '../../globals/CssMixins.js';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 0;
  background: ${Colors.Vulcan};

  @media(max-width: ${rWidths.tablet}) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`;

const LinkNavItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 5rem;
  font-weight: 300;
  font-style: normal;
  font-family: sans-serif;
  letter-spacing: 0.2em;
  color: white;
  &.active {
    color: ${Colors.Malibu};
    opacity: 0.7;
  }
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in;
    opacity: 1;
    color: ${Colors.Malibu};
  }

  @media (max-width: 2100px) {
    font-size: 4rem;
  }

  @media (max-width: 1800px) {
    font-size: 3.2rem;
  }
`;

//=========================================== component ===========================================
const DesktopNav = props => {
  return (
    <DivWrapper>
      <Nav>
        <LinkNavItem
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

export default DesktopNav;
