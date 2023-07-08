interface ICreateQuizBodyBaseQuestion {
  id: string;
  title: string;
}

interface IOption {
  id: string;
  text: string;
}

export interface ICreateQuizBodySingleChoiceQuestion
  extends ICreateQuizBodyBaseQuestion {
  correctAnswerId: string;
  options: IOption[];
  type: 'SINGLE_CHOICE';
}

export interface ICreateQuizBodyMultipleChoiceQuestion
  extends ICreateQuizBodyBaseQuestion {
  correctAnswerIds: string[];
  options: IOption[];
  type: 'MULTIPLE_CHOICE';
}

interface IMapAnswer {
  leftOptionId: string;
  rightOptionId: string;
}

export interface ICreateQuizBodyMapQuestion
  extends ICreateQuizBodyBaseQuestion {
  leftOptions: IOption[];
  rightOptions: IOption[];
  answers: IMapAnswer[];
  type: 'MAP';
}

type IQuestion =
  | ICreateQuizBodySingleChoiceQuestion
  | ICreateQuizBodyMultipleChoiceQuestion
  | ICreateQuizBodyMapQuestion;

export interface ICreateQuizBody {
  name: string;
  questions: IQuestion[];
}
