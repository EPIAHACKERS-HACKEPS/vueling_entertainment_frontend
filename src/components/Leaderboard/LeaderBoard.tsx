import React from 'react'
import {
  LeaderboardContainer,
  LeaderboardTable,
  LeaderboardTitle,
  TableCell,
  TableRow
} from './styles'
import { Page } from '../Page'

const Leaderboard = () => {
  // const leaderboardData = useSelector((state: RootState) => state.leaderboard)

  return (
    <Page>
      <LeaderboardContainer>
        <LeaderboardTitle>Leaderboard</LeaderboardTitle>
        <LeaderboardTable>
          <thead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Player</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </thead>
          <tbody>
            {/*
          {leaderboardData.map((player, index) => (
*/}
            <TableRow>
              <TableCell>index + 1</TableCell>
              <TableCell>player.name</TableCell>
              <TableCell>player.score</TableCell>
            </TableRow>
            {/*
          ))}
*/}
          </tbody>
        </LeaderboardTable>
      </LeaderboardContainer>
    </Page>
  )
}

export default Leaderboard
