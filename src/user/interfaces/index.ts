export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  attendingCoursesIds: string[];
  auth0Id: string;
}
