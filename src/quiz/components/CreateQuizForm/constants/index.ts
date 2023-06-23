import { QuestionType } from '@/quiz/components/CreateQuizForm/enums';
import { CreateQuizQuestionData } from '@/quiz/components/CreateQuizForm/interfaces';

export const DEFAULT_QUESTION = {
  title: 'Question title',
  type: QuestionType.SINGLE_CHOICE,
  correctAnswerIndex: 0,
  options: [{ text: 'Answer 1' }],
} satisfies CreateQuizQuestionData;
