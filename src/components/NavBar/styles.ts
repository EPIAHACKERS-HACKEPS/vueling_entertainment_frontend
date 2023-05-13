import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1vw;
  background-color: var(--clr-charcoal);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2vw;
  }
`

export const Logo = styled.img`
  height: calc(4vw + 4vh);
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const NavItem = styled.li`
  margin: 1vw;

  @media (max-width: 768px) {
    margin: 2vh 0 0;
  }
`

export const NavLink = styled(Link)`
  display: inline-block;
  padding: calc(1vw + 1vh) calc(2vw + 2vh);
  border-radius: 2rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: var(--clr-off-white);
  font-family: var(--ff-primary);
  font-size: calc(1vw + 1vh + 0.8rem);

  &:hover {
    background-color: var(--clr-light-gray);
    color: var(--clr-yellow);
  }

  @media (max-width: 768px) {
    padding: 2vw;
    font-size: calc(2vw + 2vh);
  }
`

export const NavLinkDisabled = styled(NavLink)`
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
`
