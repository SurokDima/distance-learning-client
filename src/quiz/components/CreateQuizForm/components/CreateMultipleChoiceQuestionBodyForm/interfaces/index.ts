import { Control } from 'react-hook-form';

import { ICreateQuizFormData } from '@/quiz/components/CreateQuizForm/interfaces';

export interface ICreateMultipleChoiceQuestionBodyFormProps {
  control: Control<ICreateQuizFormData>;
  getName: <const T extends string>(name: T) => `questions.${number}.${T}`;
  fields: Record<'id', string>[];
}
