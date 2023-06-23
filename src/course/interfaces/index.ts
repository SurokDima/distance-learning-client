import { IUser } from '@/user/interfaces';

export interface ICourse {
  id: string;
  name: string;
  author: IUser;
}
