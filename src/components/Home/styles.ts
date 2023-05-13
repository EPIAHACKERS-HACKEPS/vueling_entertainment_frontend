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
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

export const DepartureCity = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`

export const TimeLeft = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 1rem;
`

export const ProgressBar = styled.div`
  height: 1rem;
  background-color: #ffcc00;
  width: ${(props: ProgressBarProps) => props.progress}%;
`
