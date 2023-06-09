import { Typography } from 'antd';
import { FC } from 'react';

import { CreateQuizForm } from '@/modules/quiz/containers/CreateQuizForm';

export const CreateQuizPage: FC = () => {
  return (
    <>
      <Typography.Title level={1}>Create quiz</Typography.Title>
      <CreateQuizForm />
    </>
  );
};
