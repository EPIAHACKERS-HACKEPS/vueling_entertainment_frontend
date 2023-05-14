import styled from '@emotion/styled'

export const Title = styled.h1`
  font-size: calc(12px + 2vmin);
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Subtitle = styled.h2`
  font-size: calc(1rem + 1.5vmin);
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Message = styled.p`
  font-size: calc(1rem + 1vmin);
  margin-bottom: 1rem;
`

export const Button = styled.button`
  background-color: var(--clr-yellow);
  color: var(--clr-off-white);
  font-size: calc(1rem + 1vmin);
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-charcoal);
    color: var(--clr-yellow);
  }
`
