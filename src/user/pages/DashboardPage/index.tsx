import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import {
  useGetCoursesQuery,
  useGetUserQuery,
} from '@/common/store/apis/own.api';
import { CourseCard } from '@/course/components/CourseCard';

import styles from './styles.module.scss';

export const DashboardPage: FC = () => {
  const { data, isLoading } = useGetUserQuery();
  const loaderData = useLoaderData();
  const { data: courses, isLoading: isCoursesLoading } = useGetCoursesQuery();

  console.log('LOADERDATA', loaderData);
  console.log('HOOK', courses, isCoursesLoading);
  console.log('USER', data, isLoading);

  return (
    <div className={styles.coursesContainer}>
      {courses?.map((course) => (
        <CourseCard course={course} />
      ))}
    </div>
  );
};
