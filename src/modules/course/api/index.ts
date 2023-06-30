import { api } from '@/store/api';
import { ICourse } from '@/modules/course/interfaces';

const extendedCourseApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCourses: build.query<ICourse[], void>({
      query: () => '/users/me/courses',
    }),
  }),
});

export const { useGetCoursesQuery } = extendedCourseApi;
