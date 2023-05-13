import styled from '@emotion/styled'

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2vw;
`

export const QuestionText = styled.h1`
  font-size: calc(2vw + 2vh);
  margin-bottom: 2vw;
`

export const AnswerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2vw;
  margin-top: 2vw;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const AnswerOption = styled.button`
  padding: calc(1vw + 1vh) calc(2vw + 2vh);
  border: none;
  border-radius: 0.5rem;
  background-color: var(--clr-light-gray);
  color: var(--clr-yellow);
  font-size: calc(1.2vw + 1.2vh);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--clr-yellow);
    color: var(--clr-light-gray);
  }
`
