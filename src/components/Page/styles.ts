import styled from '@emotion/styled'

export const MainContent = styled.main`
  display: grid;
  align-items: center;
  align-content: center;
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
