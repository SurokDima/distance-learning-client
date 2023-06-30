import { Space, Typography } from 'antd';
import { FC } from 'react';

import { UserCoursesList } from '@/modules/course/containers/UserCoursesList';

export const UserCoursesListPage: FC = () => {
  return (
    <Space size="large">
      <Typography.Title level={1}>Courses</Typography.Title>
      <UserCoursesList />
    </Space>
  );
};
