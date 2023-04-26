export interface IP {
  amount: number,
  category: number,
  difficulty: string
}

export interface IQuiz {
  response_code: number;
  results: Result[];
}

interface Result {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

enum Difficulty {
  Easy = "easy",
  Hard = "hard",
  Medium = "medium",
}

enum Type {
  Boolean = "boolean",
  Multiple = "multiple",
}


export interface IPropsSelectField {
  label: string
  options: IOption[]
}

interface IOption {
  id: string
  name: string
}



export type MainDataResponse = Response[]

export interface Response {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface IPropTypeQuestions {
  name_question: string,
  correct_answer: string,
  incorrect_answers: string[]
}