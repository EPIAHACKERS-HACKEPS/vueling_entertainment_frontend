import styled from '@emotion/styled'

interface TableRowProps {
  isCreator: boolean;
}

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vh;
`

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`

export const TableHeader = styled.th`
  padding: 1rem;
  background-color: var(--clr-light-gray);
  font-weight: bold;
  text-align: left;
`

export const TableRow = styled.tr<TableRowProps>`
  &:nth-of-type(even) {
    background-color: var(--clr-light-gray);
  }
`

export const TableCell = styled.td`
  padding: 1rem;
`

export const AddPlaceForm = styled.form`
  display: flex;
  margin-bottom: 1rem;
`

export const AddPlaceInput = styled.input`
  padding: 0.5rem;
  margin-right: 1rem;
`

export const AddPlaceButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--clr-light-gray);
  cursor: pointer;
`

export const JoinButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--clr-light-gray);
  cursor: pointer;
`
