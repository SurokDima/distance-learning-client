import { Radio, Space } from 'antd';
import { FC } from 'react';

import { ISingleChoiceQuestionProps } from './interfaces';

export const SingleChoiceQuestion: FC<ISingleChoiceQuestionProps> = ({
  question,
}) => {
  return (
    <Space direction="vertical">
      {question.options.map((option) => (
        <Space key={option.id}>
          <Radio checked={question.correctAnswerId === option.id} disabled>
            {option.text}
          </Radio>
        </Space>
      ))}
    </Space>
  );
};
