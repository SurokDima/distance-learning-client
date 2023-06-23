import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, Typography } from 'antd';
import { FC } from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useFormWithPersist } from '@/common/hooks/useFormWithPersist';
import { useCreateQuizMutation } from '@/common/store/apis/own.api';
import { CreateQuestionForm } from '@/quiz/components/CreateQuizForm/components/CreateQuestionForm';
import { DEFAULT_QUESTION } from '@/quiz/components/CreateQuizForm/constants';
import { QuestionType } from '@/quiz/components/CreateQuizForm/enums';
import { ICreateQuizFormData } from '@/quiz/components/CreateQuizForm/interfaces';
import { mapFormData } from '@/quiz/components/CreateQuizForm/mappers';

import styles from './styles.module.scss';

const getName = (index: number) =>
  function <const T extends string>(name: T): `questions.${number}.${T}` {
    return `questions.${index}.${name}`;
  };

// TODO add support for map questions

export const CreateQuizForm: FC = () => {
  const { control, watch, handleSubmit, setValue } =
    useFormWithPersist<ICreateQuizFormData>(
      { localStorageKey: 'create-quiz-form', storage: localStorage },
      {
        defaultValues: {
          questions: [DEFAULT_QUESTION],
        },
      }
    );

  const navigate = useNavigate();
  const [createQuiz] = useCreateQuizMutation();

  const { fields, append } = useFieldArray({
    control,
    name: 'questions',
  });

  const onSubmit = async (data: ICreateQuizFormData): Promise<void> => {
    const { id } = await createQuiz(mapFormData(data)).unwrap();
    navigate(`/quizzes/${id}`);
  };

  const handleAddButtonClick = (): void => {
    append({
      title: 'Question title',
      type: QuestionType.SINGLE_CHOICE,
      correctAnswerIndex: 0,
      options: [{ text: 'Answer 1' }],
    });
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item label="Quiz name" name="name">
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input placeholder="Name" {...field} />}
        />
      </Form.Item>

      <Typography.Title level={2}>Questions</Typography.Title>

      <Space
        direction="vertical"
        size="large"
        align="center"
        style={{ width: '100%' }}
      >
        {fields.map((field, index) => (
          <CreateQuestionForm
            key={field.id}
            control={control}
            watch={watch}
            setValue={setValue}
            getName={getName(index)}
          />
        ))}
      </Space>
      <div className={styles.addButtonContainer}>
        <Button icon={<PlusOutlined />} onClick={handleAddButtonClick} />
      </div>

      <Button htmlType="submit" type="primary">
        Create
      </Button>
    </Form>
  );
};
