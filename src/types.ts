export interface IAnswers {
    id: number;
    name: string;
    isCorrect: boolean;
}
  
export interface IQuestion {
    id: number;
    question: string;
    answers: IAnswers[];
}

export interface IUserAnswers {
    questionId: number;
    answersId: number;
}

export interface IScore {
    id: number;
    name: string;
    score: number;
}