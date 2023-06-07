export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  attendingCoursesIds: string[];
  auth0Id: string;
}
