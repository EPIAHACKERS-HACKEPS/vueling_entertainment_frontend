import styled from '@emotion/styled'

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--clr-charcoal);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.img`
  height: 40px;
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
`

export const NavItem = styled.li`
  margin-left: 1rem;
`

export const NavLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: var(--clr-off-white);
  font-family: var(--ff-primary);

  &:hover {
    background-color: var(--clr-light-gray);
    color: var(--clr-yellow);
  }
`
export const NavLinkDisabled = styled(NavLink)`
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
`

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem;
`

export const ContentImage = styled.img`
  max-width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: var(--clr-charcoal);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  color: var(--clr-off-white);
  position: sticky;
  bottom: 0;
`

export const FooterText = styled.p`
  font-size: 1rem;
  font-family: var(--ff-primary);
`
