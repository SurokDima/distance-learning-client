export interface IUser {
  id: string;
  name: string;
  email: string;
  attendingCoursesIds: string[];
  auth0Id: string;
  avatarUrl: string;
}
