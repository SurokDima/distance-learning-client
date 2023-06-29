import { UserOutlined, BookOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

// TODO Maybe it could be improved
export const MENU_ITEMS: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <UserOutlined />,
  },
  {
    key: 'create-quiz',
    label: <Link to="/quizzes/create">Create Quiz</Link>,
    icon: <BookOutlined />,
  },
];
