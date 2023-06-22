import React, { useState } from "react"
import styled from "@emotion/styled"
import texts from "./texts"
import { BackToTop } from "./back-to-top"
import { MenuRender } from "./menu-render"
import "../styles/sass/style.scss"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleStatus = () => {
    setMenuOpen((menuOpen) => !menuOpen)
  }

  return (
    <StyledNavbar id="navbar">
      <NavbarContainer>
        <MainLinks>
          <BackToTop />
          <Hamburger onClick={toggleStatus} isOpen={menuOpen}>
            <HamburgerLine isOpen={menuOpen} />
            <HamburgerLine isOpen={menuOpen} />
            <HamburgerLine isOpen={menuOpen} />
          </Hamburger>
        </MainLinks>

        <DesktopNav>
          {/* <Text> */}
          <Menu>
            <MenuRender />
          </Menu>
          {/* </Text> */}
        </DesktopNav>

        <MobileNavOverlay>
          <MobileNavContent isOpen={menuOpen}>
            <Menu onClick={toggleStatus}>
              <MenuRender />
            </Menu>
          </MobileNavContent>
        </MobileNavOverlay>
      </NavbarContainer>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100vw;
  border-bottom: 1px solid var(--tertiary-color);
  align-items: center;
  justify-content: space-evenly;
  padding: 0 0.5rem 1rem;
  background-color: var(--secondary-color);
  @media screen and (min-width: 1200px) {
    &-link {
      cursor: pointer;
      padding: 0.2rem 0.4rem;
      border: 1px solid var(--tertiary-color);
      border-radius: 0.5rem;
      &:hover {
        border-color: var(--primary-color);
      }
    }
  }
`
const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 0 1rem;
`

const MainLinks = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 1.4rem !important;
  height: 1.4rem !important;
  background: transparent;
  margin: 1rem 1rem 0 !important;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`

const HamburgerLine = styled.span`
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transition: all 0.3s ease-in-out;

  &:nth-of-type(1) {
    transform: ${({ isOpen }) =>
      isOpen
        ? "rotate(-225deg) translateX(0.2rem) translateY(-0.4rem)"
        : "none"};
  }

  &:nth-of-type(2) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(180deg) translateX(0.2rem)" : "none"};
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    width: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  }

  &:nth-of-type(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(225deg) translateX(0.2rem) translateY(0.4rem)" : "none"};
  }
`

const DesktopNav = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`

const MobileNavOverlay = styled.div`
  position: absolute;
  top: 3.4rem;
  left: 0;
  width: 100%;
  height: auto;
  font-family: "Helvetica-Thin", sans-serif;
  font-size: 1.5rem;
  line-height: 2.5rem;
  transition: all 0.5s ease-in-out;
  transform: translateY(-150%);
  @media screen and (min-width: 1200px) {
    display: none;
  }
`

const MobileNavContent = styled.nav`
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--tertiary-color);
  background-color: var(--secondary-color);
  color: var(--primary-color);
  align-items: center;
  justify-content: space-evenly;
  transition: transform 0.5s ease-in-out;
  transform: translateY(-150%);

  ${({ isOpen }) => isOpen && `transform: translateY(0%);`}

  & ul {
    margin: 0 1rem 0.5rem;
    padding: 0;
    text-align: center;
  }
  & li {
    padding: 0.2rem;
    list-style-type: none;
  }
`

// const Text = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 0.7rem;
//   line-height: 2;
//   color: #fff;
//   text-align: center;
//   @media screen and (min-width: 1200px) {
//     flex-direction: row;
//     align-items: center;
//     padding: 0;
//   }
// `

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`
