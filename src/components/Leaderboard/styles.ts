import styled from '@emotion/styled'

export const LeaderboardContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

export const LeaderboardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: var(--clr-light-gray);
  }
`

export const TableCell = styled.td`
  padding: 1rem;
`
