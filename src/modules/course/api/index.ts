import { ownApi } from '@/store/api/own.api';
import { ICourse } from '@/modules/course/interfaces';

const extendedCourseApi = ownApi.injectEndpoints({
  endpoints: (build) => ({
    getCourses: build.query<ICourse[], void>({
      query: () => '/users/me/courses',
    }),
  }),
});

export const { useGetCoursesQuery } = extendedCourseApi;
