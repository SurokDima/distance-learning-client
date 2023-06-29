import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { ICreateQuizFormData } from '@/modules/quiz/containers/CreateQuizForm/interfaces';

export interface ICreateQuestionFormProps {
  control: Control<ICreateQuizFormData>;
  getName: <const T extends string>(name: T) => `questions.${number}.${T}`;
  watch: UseFormWatch<ICreateQuizFormData>;
  setValue: UseFormSetValue<ICreateQuizFormData>;
}
