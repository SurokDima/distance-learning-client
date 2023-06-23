import { Space, Form, Checkbox, Input } from 'antd';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { ICreateMultipleChoiceQuestionBodyFormProps } from '@/quiz/components/CreateQuizForm/components/CreateMultipleChoiceQuestionBodyForm/interfaces';

export const CreateMultipleChoiceQuestionBodyForm: FC<
  ICreateMultipleChoiceQuestionBodyFormProps
> = ({ control, fields, getName }) => {
  return (
    <Space direction="vertical">
      {fields.map((field, index) => (
        <Space key={field.id} direction="horizontal" size="large">
          <Form.Item name="isCorrect">
            <Controller
              name={getName(`options.${index}.isCorrect`)}
              control={control}
              render={({ field: { value, ...field } }) => (
                <Checkbox {...field} checked={value} />
              )}
            />
          </Form.Item>
          <Form.Item name="answer.title">
            <Controller
              name={getName(`options.${index}.text`)}
              control={control}
              render={({ field }) => <Input placeholder="Answer" {...field} />}
            />
          </Form.Item>
        </Space>
      ))}
    </Space>
  );
};
