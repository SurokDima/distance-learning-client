import { Radio, Space, Form, Input } from 'antd';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { ICreateSingleChoiceQuestionBodyFormProps } from './interfaces';

export const CreateSingleChoiceQuestionBodyForm: FC<
  ICreateSingleChoiceQuestionBodyFormProps
> = ({ control, getName, fields }) => {
  return (
    <Space direction="vertical">
      {fields.map((field, index) => (
        <Space key={field.id} direction="horizontal" size="large">
          <Form.Item>
            <Controller
              name={getName('correctAnswerIndex')}
              control={control}
              render={({ field: { value, onChange } }) => (
                <Radio
                  onChange={() => onChange(index)}
                  checked={index === value}
                />
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
