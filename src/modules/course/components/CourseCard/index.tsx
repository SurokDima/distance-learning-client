import { Card, Divider, Progress, Space, Typography } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICourseCardProps } from '@/modules/course/components/CourseCard/interfaces';
import { UserAvatar } from '@/modules/user/components/UserAvatar';

export const CourseCard: FC<ICourseCardProps> = ({
  course: { id, name, author },
}) => {
  return (
    <Card key={id} title={<Link to={`/courses/${id}`}>{name}</Link>}>
      <Progress percent={50} />
      <Divider>Author</Divider>
      <Space size="small">
        <UserAvatar src={author.avatarUrl} />
        <Typography.Text>{author.name}</Typography.Text>
      </Space>
    </Card>
  );
};
