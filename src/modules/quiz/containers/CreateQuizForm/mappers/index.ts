import { nanoid } from '@reduxjs/toolkit';

import {
  ICreateQuizBody,
  ICreateQuizBodyMultipleChoiceQuestion,
  ICreateQuizBodySingleChoiceQuestion,
} from '@/modules/common/store/apis/interfaces/createQuizBody';
import { QuestionType } from '@/modules/quiz/containers/CreateQuizForm/enums';
import {
  ICreateQuizSingleChoiceQuestionData,
  ICreateQuizMultipleChoiceQuestionData,
  ICreateQuizFormData,
} from '@/modules/quiz/containers/CreateQuizForm/interfaces';

export const mapFormData = (data: ICreateQuizFormData): ICreateQuizBody => {
  return {
    name: data.name,
    questions: data.questions.map((question) => {
      if (question.type === QuestionType.SINGLE_CHOICE) {
        return mapSingleChoiceQuestion(question);
      }

      return mapMultipleChoiceQuestion(question);
    }),
  };
};

const mapSingleChoiceQuestion = (
  question: ICreateQuizSingleChoiceQuestionData
): ICreateQuizBodySingleChoiceQuestion => {
  const options = question.options.map((option) => ({
    ...option,
    id: nanoid(),
  }));

  const correctAnswerId = options[question.correctAnswerIndex]?.id;

  return {
    id: nanoid(),
    title: question.title,
    type: question.type,
    options,
    correctAnswerId,
  };
};

const mapMultipleChoiceQuestion = (
  question: ICreateQuizMultipleChoiceQuestionData
): ICreateQuizBodyMultipleChoiceQuestion => {
  const options = question.options.map((option) => ({
    id: nanoid(),
    text: option.text,
    isCorrect: option.isCorrect,
  }));

  const correctAnswerIds = options
    .filter((option) => option.isCorrect)
    .map((option) => option.id);

  return {
    id: nanoid(),
    title: question.title,
    type: question.type,
    correctAnswerIds,
    options: options.map(({ isCorrect: _, ...option }) => option),
  };
};
