import { IQuestion } from '@/modules/quiz/api/interfaces';

export interface IQuestionProps {
  question: IQuestion;
  title: string;
}

export interface IQuestionBodyProps {
  question: IQuestion;
}
