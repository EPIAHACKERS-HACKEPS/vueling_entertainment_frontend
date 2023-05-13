import styled from '@emotion/styled'

interface ProgressBarProps {
  progress: number;
}

export const FlightStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: var(--clr-charcoal);
  padding: 2rem;
  border-radius: 1rem;
`

export const FlightDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: var(--clr-off-white);
`

export const ArrivalCity = styled.h2`
  font-size: calc(1rem + 1vw);
  margin-bottom: 0.5rem;
`

export const DepartureCity = styled.h3`
  font-size: calc(1rem + 0.5vw);
  margin-bottom: 0.5rem;
`

export const TimeLeft = styled.p`
  font-size: calc(1rem + 0.25vw);
  margin-bottom: 1rem;
  margin-top: 1rem;
`

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: calc(1rem + 0.25vw);
  background-color: var(--clr-off-white);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 1rem;
`

export const ProgressBar = styled.div`
  height: calc(1rem + 0.25vw);
  background-color: var(--clr-yellow);
  width: calc(${(props: ProgressBarProps) => props.progress}% - 2px);
`
