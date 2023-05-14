import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-light-gray);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1vw;
  }
`

export const Logo = styled.img`
  height: calc(2vw + 2vh);
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;

  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const NavItem = styled.li`
  margin: 1vw;

  @media (max-width: 768px) {
    margin: 1vh 0 0;
  }
`

export const NavLink = styled(Link)`
  display: inline-block;
  padding: calc(0.5vw + 0.5vh) calc(1vw + 1vh);
  border-radius: 2rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: var(--clr-off-white);
  font-family: var(--ff-primary);
  font-size: calc(1vw + 1vh + 0.8rem);

  &:hover {
    background-color: var(--clr-charcoal);
    color: var(--clr-yellow);
  }

  @media (max-width: 768px) {
    padding: 1vw;
    font-size: calc(2vw + 2vh);
  }
`

export const NavLinkDisabled = styled(NavLink)`
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
`
