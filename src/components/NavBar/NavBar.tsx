import React, { PropsWithChildren } from 'react'
import {
  Footer,
  FooterText,
  Logo,
  MainContent,
  Navbar,
  NavItem,
  NavLink,
  NavLinkDisabled,
  NavList
} from './styles'

const NavBar = (props: PropsWithChildren) => {
  return (
    <>
      <Navbar>
        <Logo src="/public/images/logo.svg" alt="Logo" />
        <NavList>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/trivial">Trivial</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/igoto">I go to... </NavLink>
          </NavItem>
          <NavItem>
            <NavLinkDisabled href="/assistance">Assistance</NavLinkDisabled>
          </NavItem>
          <NavItem>
            <NavLinkDisabled href="/chat">Chat</NavLinkDisabled>
          </NavItem>
        </NavList>
      </Navbar>

      <MainContent>{props.children}</MainContent>

      <Footer>
        <FooterText>&copy; 2023 Vueling Entertainment</FooterText>
      </Footer>
    </>
  )
}

export default NavBar
