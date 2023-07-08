import { QuestionType } from '@/modules/quiz/api/enums';

export interface IQuiz {
  id: string;
  name: string;
  questions: IQuestion[];
}

export type IQuestion =
  | ISingleChoiceQuestion
  | IMultipleChoiceQuestion
  | IMapQuestion;
// Create general interface for questions
interface IQuestionCommon {
  id: string;
  title: string;
}

interface IChoiceQuestion extends IQuestionCommon {
  options: IOption[];
}

export interface ISingleChoiceQuestion extends IChoiceQuestion {
  type: QuestionType.SINGLE_CHOICE;
  correctAnswerId: string;
}

export interface IMultipleChoiceQuestion extends IChoiceQuestion {
  type: QuestionType.MULTIPLE_CHOICE;
  correctAnswerIds: string[];
}

export interface IMapQuestion extends IQuestionCommon {
  type: QuestionType.MAP;
  rightOptions: IOption[];
  leftOptions: IOption[];
  answers: IMapAnswer[];
}

interface IMapAnswer {
  leftOptionId: string;
  rightOptionId: string;
}

interface IOption {
  id: string;
  text: string;
}
