import { PlusOutlined } from '@ant-design/icons';
import { Card, Tooltip, Button, Space, Form, Input, Select } from 'antd';
import { FC } from 'react';
import { useFieldArray, Controller } from 'react-hook-form';

import { CreateMultipleChoiceQuestionBodyForm } from '@/quiz/components/CreateQuizForm/components/CreateMultipleChoiceQuestionBodyForm';
import { ICreateQuestionFormProps } from '@/quiz/components/CreateQuizForm/components/CreateQuestionForm/interfaces';
import { CreateSingleChoiceQuestionBodyForm } from '@/quiz/components/CreateQuizForm/components/CreateSingleChoiceQuestionBodyForm';
import { QuestionType } from '@/quiz/components/CreateQuizForm/enums';

const DEFAULT_CHOICES = {
  [QuestionType.SINGLE_CHOICE]: { text: '' },
  [QuestionType.MULTIPLE_CHOICE]: { text: '', isCorrect: false },
};

export const CreateQuestionForm: FC<ICreateQuestionFormProps> = ({
  control,
  getName,
  watch,
  setValue,
}) => {
  const { fields, append } = useFieldArray({
    name: getName('options'),
    control,
  });

  const watchType = watch(getName('type'));

  const handleAddButtonClick = (): void => {
    append(DEFAULT_CHOICES[watchType]);
  };

  const label =
    watchType === QuestionType.SINGLE_CHOICE
      ? 'Add single choice'
      : 'Add multiple choice';

  return (
    <Card
      actions={[
        <Tooltip title={label}>
          <Button
            aria-label={label}
            icon={<PlusOutlined />}
            onClick={handleAddButtonClick}
          />
        </Tooltip>,
      ]}
    >
      <Space direction="vertical" size="large">
        <Space size="large">
          <Form.Item label="Question Title">
            <Controller
              name={getName('title')}
              control={control}
              render={({ field }) => (
                <Input placeholder="Question title" {...field} />
              )}
            />
          </Form.Item>
          <Form.Item label="Question type">
            <Controller
              name={getName('type')}
              control={control}
              render={({ field: { onChange, ...field } }) => (
                <Select
                  onChange={(props) => {
                    setValue(getName('options'), [DEFAULT_CHOICES[props]]);
                    onChange(props);
                  }}
                  options={[
                    {
                      value: QuestionType.SINGLE_CHOICE,
                      label: 'Single choice',
                    },
                    {
                      value: QuestionType.MULTIPLE_CHOICE,
                      label: 'Multiple choice',
                    },
                    // { value: QuestionType.MAP, label: 'Map' },
                  ]}
                  {...field}
                />
              )}
            />
          </Form.Item>
        </Space>

        {watchType === QuestionType.SINGLE_CHOICE ? (
          <CreateSingleChoiceQuestionBodyForm
            control={control}
            getName={getName}
            fields={fields}
          />
        ) : (
          <CreateMultipleChoiceQuestionBodyForm
            control={control}
            getName={getName}
            fields={fields}
          />
        )}
      </Space>
    </Card>
  );
};
