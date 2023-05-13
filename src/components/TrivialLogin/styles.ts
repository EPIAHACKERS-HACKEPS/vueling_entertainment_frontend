import styled from '@emotion/styled'

export const Title = styled.h1`
  font-size: calc(1rem + 1vw + 1vh);
  margin-bottom: 1rem;
  text-align: center;
`

export const UsernameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UsernameInput = styled.input`
  padding: calc(0.5rem + 0.5vw + 0.5vh);
  margin-bottom: 1rem;
  border: 1px solid var(--clr-light-gray);
`

export const SubmitButton = styled.button`
  padding: calc(0.3rem + 0.8vw + 0.8vh) calc(1rem + 2vw + 2vh);
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`
