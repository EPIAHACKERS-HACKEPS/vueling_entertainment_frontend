import React, { useEffect } from 'react'
import {
  LeaderboardContainer,
  LeaderboardTable,
  LeaderboardTitle,
  TableCell,
  TableRow
} from './styles'
import { Page } from '../Page'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types'
import { v4 as u } from 'uuid'
import { setLeaderBoard } from '../../reducers/leaderBoardReducer'

const Leaderboard = () => {
  const leaderboardData = useSelector(
    (state: RootState) => state.leaderBoard.leaderBoard
  )

  const dispatch = useDispatch()

  useEffect(() => {
    const myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    fetch('http://127.0.0.1/leadborard', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setLeaderBoard(result || []))
      })
      .catch((error) => console.log('error', error))
  }, [])

  return (
    <Page>
      <LeaderboardContainer>
        <LeaderboardTitle>Leaderboard</LeaderboardTitle>
        <LeaderboardTable>
          <thead>
            <TableRow>
              <TableCell>Seat</TableCell>
              <TableCell>Player</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <TableRow key={u()}>
                <TableCell>{player.seat}</TableCell>
                <TableCell>{player.nickname}</TableCell>
                <TableCell>{player.points}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </LeaderboardTable>
      </LeaderboardContainer>
    </Page>
  )
}

export default Leaderboard
