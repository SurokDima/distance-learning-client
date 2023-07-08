import { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useNotification } from '@/modules/common/providers/NotificationProvider/hooks';
import { QuizView } from '@/modules/quiz/containers';

export const QuizPage: FC = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const wasCreated = state?.wasCreated as boolean | undefined;
  const notification = useNotification();

  useEffect(() => {
    if (wasCreated) {
      notification.success({
        type: 'success',
        message: 'Quiz was created!',
      });
    }
  }, [notification, wasCreated]);

  if (!id) throw new Error('Id is empty');
  return <QuizView quizId={id} />;
};
