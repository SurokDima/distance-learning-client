import { Descriptions, Space, Spin, Typography } from 'antd';
import { FC } from 'react';

import { useGetQuizQuery } from '@/modules/quiz/api';

import { Question } from './components';
import { IQuizViewProps } from './interfaces';
import styles from './styles.module.scss';

export const QuizView: FC<IQuizViewProps> = ({ quizId }) => {
  const { data: quiz, isLoading } = useGetQuizQuery(quizId);
  if (isLoading || !quiz) return <Spin />;

  return (
    <>
      <Space direction="vertical" size="large">
        <Space direction="vertical" size="small">
          <Typography.Title>{quiz.name}</Typography.Title>
        </Space>
        <Descriptions>
          <Descriptions.Item label="Amount of questions">
            {quiz.questions.length}
          </Descriptions.Item>
        </Descriptions>
        <Typography.Title level={2}>Questions</Typography.Title>
        <Space
          align="center"
          direction="vertical"
          size="middle"
          className={styles.questionsContainer}
        >
          {quiz.questions.map((question, index) => (
            <Question
              title={`Question #${index + 1}`}
              question={question}
              key={question.id}
            />
          ))}
        </Space>
      </Space>
    </>
  );
};
