import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { addScore } from '../../reducers/trivialReducer'
import { RootState } from '../../types'
import { ScoreContainer, ScoreText, ScoreTitle, ScoreValue } from './styles'

const TrivialScore = () => {
  const questions = useSelector((state: RootState) => state.question.questions)
  const dispatch = useDispatch()
  const score = useSelector((state: RootState) => state.trivial.score)

  useEffect(() => {
    questions.forEach((question) => {
      if (question.answer.includes(question.correctAnswer)) {
        dispatch(addScore(score + 1))
      }
    })
  }, [questions])

  return (
    <ScoreContainer>
      <ScoreTitle>Score</ScoreTitle>
      <ScoreValue>{score}</ScoreValue>
      <ScoreText>
        Keep answering questions to improve your score and test your trivia
        knowledge!
      </ScoreText>
    </ScoreContainer>
  )
}

export default TrivialScore
