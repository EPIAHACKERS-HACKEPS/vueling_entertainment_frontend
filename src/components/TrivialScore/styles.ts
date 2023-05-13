import styled from '@emotion/styled'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-light-gray);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ScoreTitle = styled.h1`
  font-size: calc(1.5rem + 1vw);
  margin-bottom: 1rem;
  color: var(--clr-white);
`

export const ScoreValue = styled.h2`
  font-size: calc(2rem + 2vw);
  margin: 0;
  color: var(--clr-yellow);
`

export const ScoreText = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: var(--clr-off-white);
`
