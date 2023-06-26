import { QuestionType } from '@/modules/quiz/components/CreateQuizForm/enums';

export interface ICreateQuizSingleChoiceQuestionData {
  title: string;
  type: QuestionType.SINGLE_CHOICE;
  correctAnswerIndex: number;
  options: {
    text: string;
  }[];
}

export interface ICreateQuizMultipleChoiceQuestionData {
  title: string;
  type: QuestionType.MULTIPLE_CHOICE;
  options: {
    isCorrect: boolean;
    text: string;
  }[];
}

export type CreateQuizQuestionData =
  | ICreateQuizSingleChoiceQuestionData
  | ICreateQuizMultipleChoiceQuestionData;

export interface ICreateQuizFormData {
  name: string;
  questions: CreateQuizQuestionData[];
}
