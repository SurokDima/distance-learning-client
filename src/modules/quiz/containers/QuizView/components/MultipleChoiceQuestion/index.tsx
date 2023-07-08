import { Checkbox, Space } from 'antd';
import { FC } from 'react';

import { IMultipleChoiceQuestionProps } from './interfaces';

export const MultipleChoiceQuestion: FC<IMultipleChoiceQuestionProps> = ({
  question,
}) => {
  return (
    <Space direction="vertical">
      {question.options.map((option) => (
        <Space key={option.id}>
          <Checkbox
            checked={question.correctAnswerIds.includes(option.id)}
            disabled
          >
            {option.text}
          </Checkbox>
        </Space>
      ))}
    </Space>
  );
};
