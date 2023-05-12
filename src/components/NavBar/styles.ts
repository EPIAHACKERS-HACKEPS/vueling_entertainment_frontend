import styled from '@emotion/styled'

export const NavbarContainer = styled.nav`
  background-color: var(--clr-charcoal);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: 5rem;
  padding: 0 2rem;
`

export const NavItem = styled.a`
  color: var(--clr-off-white);
  text-decoration: none;

  &:hover {
    color: #ffcc00;
    cursor: pointer;
  }
`

export const Logo = styled.img`
  height: 3rem;
  width: auto;
`
