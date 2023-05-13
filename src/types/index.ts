export interface UsernameState {
  username: string;
}

export interface FlightState {
  Departure: string;
  Arrival: string;
  DepartureDate: string;
  ArrivalDate: string;
  Temperature: number;
  Condition: string;
  Icon: string;
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
  creator: string;
  joinedBy: string[];
}

export interface QuestionState {
  questions: Question[];
}

export interface SeatNumberState {
  seatNumber: string;
}

export interface PlaceState {
  places: Place[];
}

export interface RootState {
  username: UsernameState;
  flight: FlightState;
  trivial: TrivialState;
  question: QuestionState;
  seatNumber: SeatNumberState;
  place: PlaceState;
}

export interface FlightInfo {
  origin_city: string;
  destination_city: string;
  origin_date: string;
  destination_date: string;
  temperature: number;
  condition: string;
  icon: string;
}
