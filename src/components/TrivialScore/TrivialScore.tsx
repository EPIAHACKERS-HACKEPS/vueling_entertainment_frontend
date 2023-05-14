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
  setIsGameOver,
  setSavePoint,
  setScore
} from '../../reducers/trivialReducer'

const TrivialScore = () => {
  const dispatch = useDispatch()
  const score = useSelector((state: RootState) => state.trivial.score)
  const questions = useSelector((state: RootState) => state.question.questions)

  const handleLeaderboardClick = () => {
    // history.push('/leaderboard')
  }

  const handleReplayClick = () => {
    dispatch(setScore(0))
    dispatch(setSavePoint(0))
    dispatch(setIsGameOver(false))
  }

  useEffect(() => {
    dispatch(setScore(0))
    questions.forEach((question) => {
      if (question.answer.includes(question.correctAnswer)) {
        dispatch(addScore(score + 1))
      }
    })
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
        <Button onClick={handleLeaderboardClick}>Leaderboard</Button>
        <Button onClick={handleReplayClick}>Replay</Button>
      </ButtonContainer>
    </ScoreContainer>
  )
}

export default TrivialScore
