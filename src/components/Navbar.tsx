import React, { useState } from 'react';

import 'components/Navbar.css';

import { Colors } from 'consts/colors';
import { Link, useLocation } from 'react-router-dom';
import BarsIcon from 'assets/icons/Menu.svg';
import { NavButton } from 'components';
import styled from 'styled-components';

const SCROLLYLIMIT = 200;

const StyledNavbar = styled.nav.attrs(
  (props: { scrollY: number; pathname: string }) => ({
    scrollY: props.scrollY,
  })
)`
  background: ${(props) =>
    props.scrollY < SCROLLYLIMIT ? 'transparent' : Colors.navy};
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  z-index: 99;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const StyledBarsIcon = styled.img`
  display: none;

  @media (max-width: 991px) {
    float: left;
    display: block;
    cursor: pointer;
    margin-left: 4vw;
    margin-right: 4vw;
    width: 26px;
  }
`;

const StyledLogo = styled(Link).attrs(
  (props: { scrollY: number; pathname: string }) => ({
    scrollY: props.scrollY,
    pathname: props.pathname,
  })
)`
  color: ${(props) => {
    if (props.pathname === '/about-us') {
      return props.scrollY < SCROLLYLIMIT ? Colors.black : Colors.white;
    }
    return Colors.white;
  }};
  justify-self: start;
  margin-left: 4vw;
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  float: left;

  @media (max-width: 991px) {
    float: left;
    margin-left: 0;
  }
`;

const StyledNavMenu = styled.ul.attrs((props: { menuClick: boolean }) => ({
  menuClick: props.menuClick,
}))`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 40px;
  list-style: none;
  text-align: center;
  justify-content: end;

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: -130%;
    opacity: 1;
    transition: all 0.5s ease;

    ${(props) =>
      props.menuClick &&
      `
        background: ${Colors.black};
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
        padding: 0;
  `}
  }
`;

const StyledNavLinks = styled(Link).attrs(
  (props: { scrollY: number; pathname: string }) => ({
    scrollY: props.scrollY,
    pathname: props.pathname,
  })
)`
  color: ${(props) => {
    if (props.pathname === '/about-us') {
      return props.scrollY < SCROLLYLIMIT ? Colors.black : Colors.white;
    }
    return Colors.white;
  }};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;

  :hover {
    color: ${Colors.lightBlue};
    border-bottom: 1px solid ${Colors.lightBlue};
    transition: all 0.2s ease-out;
  }

  :focus {
    color: ${Colors.lightBlue};
    border-bottom: 1px solid ${Colors.lightBlue};
  }

  :active {
    color: ${Colors.lightBlue};
    border-bottom: 1px solid ${Colors.lightBlue};
  }

  @media (max-width: 991px) {
    text-align: center;
    padding: 20px 0;
    width: 100%;
    display: table;

    :hover {
      background-color: ${Colors.white};
      color: ${Colors.black};
    }
  }
`;

const NavButtonWrapper = styled.div`
  position: absolute;
  right: 4vw;
`;

export const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleMenuClick = () => setMenuClick(!menuClick);
  const closeMobileMenu = () => setMenuClick(false);

  const location = useLocation();

  window.onscroll = function () {
    setScrollY(window.scrollY);
  };

  return (
    <StyledNavbar scrollY={scrollY}>
      <StyledContainer>
        <StyledBarsIcon
          src={BarsIcon}
          alt={'bars-icon'}
          onClick={handleMenuClick}
        />
        <StyledLogo to={'/'} scrollY={scrollY} pathname={location.pathname}>
          brainn.co
        </StyledLogo>
        <StyledNavMenu menuClick={menuClick}>
          <li>
            <StyledNavLinks
              to={'/services'}
              onClick={closeMobileMenu}
              scrollY={scrollY}
              pathname={location.pathname}
            >
              Services
            </StyledNavLinks>
          </li>
          <li>
            <StyledNavLinks
              to={'/about-us'}
              onClick={closeMobileMenu}
              scrollY={scrollY}
              pathname={location.pathname}
            >
              About us
            </StyledNavLinks>
          </li>
        </StyledNavMenu>
        <NavButtonWrapper>
          <NavButton
            backgroundColor={Colors.blue}
            textColor={Colors.white}
            lineHeight={'25px'}
            border={'2px solid rgba(0, 0, 0, 0.25)'}
          >
            Say hello
          </NavButton>
        </NavButtonWrapper>
      </StyledContainer>
    </StyledNavbar>
  );
};
