import { IUser } from '@/modules/user/interfaces';

export interface ICourse {
  id: string;
  name: string;
  author: IUser;
}
