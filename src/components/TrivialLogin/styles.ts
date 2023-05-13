import styled from '@emotion/styled'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`

export const UsernameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UsernameInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`
