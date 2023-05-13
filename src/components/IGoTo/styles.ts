import styled from '@emotion/styled'

interface TableRowProps {
  isCreator: boolean;
}

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TableHeader = styled.th`
  padding: 1rem;
  background-color: var(--clr-light-gray);
  color: var(--clr-yellow);
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
  background-color: var(--clr-yellow);
  border: var(--clr-charcoal) 0.05rem solid;
  cursor: pointer;
`

export const JoinButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--clr-light-gray);
  cursor: pointer;
`
