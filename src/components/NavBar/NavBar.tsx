import React from 'react'
import {
  Logo,
  Navbar,
  NavItem,
  NavLink,
  NavLinkDisabled,
  NavList
} from './styles'

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Logo src="/public/images/logo.svg" alt="Logo" />
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/trivial">Trivial</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/igoto">I go to... </NavLink>
          </NavItem>
          <NavItem>
            <NavLinkDisabled to="/assistance">Assistance</NavLinkDisabled>
          </NavItem>
        </NavList>
      </Navbar>
    </>
  )
}

export default NavBar
