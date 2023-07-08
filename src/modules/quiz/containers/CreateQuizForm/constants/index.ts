import { QuestionType } from '@/modules/quiz/containers/CreateQuizForm/enums';
import { CreateQuizQuestionData } from '@/modules/quiz/containers/CreateQuizForm/interfaces';

export const DEFAULT_QUESTION = {
  title: 'Question title',
  type: QuestionType.SINGLE_CHOICE,
  correctAnswerIndex: 0,
  options: [{ text: 'Answer 1' }],
} satisfies CreateQuizQuestionData;

export const STORAGE_KEY = 'create-quiz-form';
