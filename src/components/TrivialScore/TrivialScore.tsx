import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types'
import {
  Button,
  ButtonContainer,
  ScoreContainer,
  ScoreText,
  ScoreTitle,
  ScoreValue
} from './styles'
import {
  addScore,
  setExported,
  setIsGameOver,
  setSavePoint,
  setScore
} from '../../reducers/trivialReducer'

const TrivialScore = () => {
  const dispatch = useDispatch()
  const score = useSelector((state: RootState) => state.trivial.score)
  const questions = useSelector((state: RootState) => state.question.questions)
  const username = useSelector((state: RootState) => state.username.username)
  const seatNumber = useSelector(
    (state: RootState) => state.seatNumber.seatNumber
  )
  const exported = useSelector((state: RootState) => state.trivial.exported)

  const handleLeaderboardClick = () => {
    // history.push('/leaderboard')
  }

  const handleReplayClick = () => {
    dispatch(setScore(0))
    dispatch(setSavePoint(0))
    dispatch(setIsGameOver(false))
  }

  useEffect(() => {
    questions.forEach((question) => {
      if (question.answer.includes(question.correctAnswer)) {
        dispatch(addScore(score + 1))
      }
    })
    console.log('score', score)

    if (!exported) {
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')

      const formdata = new FormData()
      formdata.append('seat', seatNumber.toString())
      formdata.append('username', username)
      formdata.append('questions', JSON.stringify(questions))

      const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      }

      fetch('http://127.0.0.1/leadborard', requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error))
      dispatch(setExported(true))
    }
  }, [])

  return (
    <ScoreContainer>
      <ScoreTitle>Score</ScoreTitle>
      <ScoreValue>{score}</ScoreValue>
      <ScoreText>
        Keep answering questions to improve your score and test your trivia
        knowledge!
      </ScoreText>
      <ButtonContainer>
        <Button onClick={handleReplayClick}>Replay</Button>
      </ButtonContainer>
    </ScoreContainer>
  )
}

export default TrivialScore
