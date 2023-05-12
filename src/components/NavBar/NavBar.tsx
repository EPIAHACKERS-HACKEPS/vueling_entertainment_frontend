import React from 'react'
import { Logo, NavbarContainer, NavItem } from './styles'

const NavBar = () => {
  return (
    <>
      <NavbarContainer>
        <Logo src="/public/images/logo.svg" alt="logo" />
        <NavItem>Home</NavItem>
        <NavItem>Quest</NavItem>
        <NavItem>Map</NavItem>
      </NavbarContainer>
    </>
  )
}

export default NavBar
