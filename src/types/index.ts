export interface UsernameState {
  username: string;
}

export interface FlightState {
  Departure: string;
  Arrival: string;
  DepartureDate: string;
  ArrivalDate: string;
}

export interface Record {
  username: string;
  score: number;
}

export interface TrivialState {
  records: Record[];
  savePoint: number;
  score: number;
  isGameOver: boolean;
}

export interface Question {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
  answer: string;
}

export interface Place {
  id: string;
  name: string;
  joinedBy: string[];
}

export interface QuestionState {
  questions: Question[];
}

export interface RootState {
  username: UsernameState;
  flight: FlightState;
  trivial: TrivialState;
  question: QuestionState;
}
