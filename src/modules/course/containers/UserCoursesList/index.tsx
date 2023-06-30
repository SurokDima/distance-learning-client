import { FC } from 'react';

import { useGetCoursesQuery } from '@/modules/course/api';
import { CourseCard } from '@/modules/course/components/CourseCard';

import styles from './styles.module.scss';

export const UserCoursesList: FC = () => {
  const { data: courses } = useGetCoursesQuery();

  return (
    <div className={styles.coursesContainer}>
      {courses?.map((course) => (
        <CourseCard course={course} />
      ))}
    </div>
  );
};
