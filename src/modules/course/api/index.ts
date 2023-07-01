import { ICourse } from '@/modules/course/interfaces';
import { api } from '@/store/api';

const extendedCourseApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCourses: build.query<ICourse[], void>({
      query: () => '/users/me/courses',
    }),
  }),
});

export const { useGetCoursesQuery } = extendedCourseApi;
