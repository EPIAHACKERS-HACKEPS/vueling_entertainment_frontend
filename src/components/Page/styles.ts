import styled from '@emotion/styled'

export const MainContent = styled.main`
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  min-height: calc(85vh - 4rem);
  padding: 2vw;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vw;
  background-color: var(--clr-charcoal);
  box-shadow: 0 -0.5vw 1vw rgba(0, 0, 0, 0.1);
  color: var(--clr-off-white);
  position: sticky;
  bottom: 0;
`

export const FooterText = styled.p`
  font-size: calc(0.8vw + 0.8vh);
  font-family: var(--ff-primary);
`
