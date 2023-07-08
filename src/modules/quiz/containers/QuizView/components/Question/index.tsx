import { Card, Space, Tag, Typography } from 'antd';
import { FC } from 'react';

import { QuestionType } from '@/modules/quiz/api/enums';

import { MultipleChoiceQuestion } from '../MultipleChoiceQuestion';
import { SingleChoiceQuestion } from '../SingleChoiceQuestion';

import { IQuestionBodyProps, IQuestionProps } from './interfaces';
import styles from './styles.module.scss';

const QuestionBody: FC<IQuestionBodyProps> = ({ question }) => {
  if (question.type === QuestionType.SINGLE_CHOICE)
    return <SingleChoiceQuestion question={question} />;

  if (question.type === QuestionType.MULTIPLE_CHOICE)
    return <MultipleChoiceQuestion question={question} />;

  return null;
};

const QUESTION_TYPE_TAG_COLORS = {
  [QuestionType.SINGLE_CHOICE]: 'blue',
  [QuestionType.MULTIPLE_CHOICE]: 'green',
  [QuestionType.MAP]: 'purple',
};

const QUESTION_TYPE_TAG_TEXTS = {
  [QuestionType.SINGLE_CHOICE]: 'Single choice',
  [QuestionType.MULTIPLE_CHOICE]: 'Multiple choice',
  [QuestionType.MAP]: 'Map',
};

const QuestionTypeTag: FC<{ type: QuestionType }> = ({ type }) => {
  const color = QUESTION_TYPE_TAG_COLORS[type];
  const text = QUESTION_TYPE_TAG_TEXTS[type];
  return <Tag color={color}>{text}</Tag>;
};

export const Question: FC<IQuestionProps> = ({ question, title }) => {
  return (
    <Card
      className={styles.questionCard}
      title={
        <div className={styles.titleContainer}>
          <Typography.Text className={styles.titleText}>
            {title}
          </Typography.Text>
          <QuestionTypeTag type={question.type} />
        </div>
      }
    >
      <Space direction="vertical" size="large">
        <Typography.Text>{question.title}</Typography.Text>
        <QuestionBody question={question} />
      </Space>
    </Card>
  );
};
